import { EntypoIconName } from "entypo-icons-core";

export class EntypoManagerEntity {
  readonly icon: EntypoIconName;
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
}

export class EntypoManager {
  public static addIcons(...entities: EntypoManagerEntity[]) {
    if (document.getElementById("entypo-sprite")) {
      return;
    }
    entities.forEach(({ icon, getSprite }) => {
      EntypoManager.loadSvg(`entypo-icon-sprite-${icon}`, getSprite());
    });
  }

  public static async fetchSprite(url: string) {
    return new Promise<string>((resolve, reject) => {
      const ajax = new XMLHttpRequest();
      ajax.open("GET", url, true);
      ajax.send();
      ajax.onload = () => resolve(ajax.responseText);
      ajax.onerror = () => reject();
    });
  }

  public static loadSvg(id: string, svg: string) {
    loadcss();
    if (document.getElementById(id)) {
      return;
    }
    const div = document.createElement("div");
    div.id = id;
    div.style.position = "absolute";
    div.style.top = "-1000000px";
    div.style.left = "-1000000px";
    div.style.width = "0px";
    div.style.height = "0px";
    div.style.visibility = "hidden";
    div.style.opacity = "0";
    div.innerHTML = svg;
    insertToDom(div);
  }
}

const insertToDom = (node: HTMLElement) => {
  document.body.insertBefore(node, document.body.childNodes[0]);
};

const loadcss = (() => {
  let cssNode: HTMLStyleElement | null = null;
  const css = `
.entypo-icon {
  fill: currentColor;
}

.entypo-icon-spin {
  animation: entypo-icon-spin-anim 1.5s infinite linear;
  transform-origin: center center;
}

@keyframes entypo-icon-spin-anim {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
  return () => {
    if (!cssNode) {
      cssNode = document.createElement("style");
      cssNode.innerHTML = css;
      insertToDom(cssNode);
    }
  };
})();
