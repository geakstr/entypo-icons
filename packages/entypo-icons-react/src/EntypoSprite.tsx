import { EntypoManager } from "entypo-icons-utils";
import * as React from "react";

const SPRITE_DEFAULT_URL = "https://unpkg.com/entypo-react/sprite.svg";

export interface EntypoSpriteProps {
  readonly url?: string;
  readonly html?: string;
}

export class EntypoSprite extends React.PureComponent<EntypoSpriteProps> {
  componentDidMount() {
    const { url, html } = this.props;
    let finalUrl = url;
    if (!url && !html) {
      finalUrl = SPRITE_DEFAULT_URL;
    }
    finalUrl ? this.fetch(finalUrl) : this.load(html);
  }

  fetch = (url: string) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", url, true);
    ajax.send();
    ajax.onload = () => this.load(ajax.responseText);
  };

  load = (html: string) => {
    EntypoManager.loadSvg("entypo-sprite", html);
  };

  render(): null {
    return null;
  }
}
