import { EntypoManager } from "entypo-icons-utils";
import * as React from "react";

const SPRITE_DEFAULT_URL = "https://unpkg.com/entypo-icons-core/sprite.svg";

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

  fetch = async (url: string) => {
    try {
      this.load(await EntypoManager.fetchSprite(url));
    } catch (error) {
      console.error(error);
    }
  };

  load = (html: string) => {
    EntypoManager.loadSvg("entypo-sprite", html);
  };

  render(): null {
    return null;
  }
}
