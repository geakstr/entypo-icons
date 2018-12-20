import { EntypoIconName } from "entypo-icons-core";
import { EntypoManager } from "entypo-icons-utils";
import * as React from "react";

export interface EntypoIconProps extends React.SVGAttributes<SVGElement> {
  readonly size: number;
  readonly icon: EntypoIconName;
  readonly html?: string;
  readonly spin?: boolean;
}

export class EntypoIcon extends React.PureComponent<EntypoIconProps> {
  componentDidMount() {
    if (this.props.html) {
      EntypoManager.addIcons({
        icon: this.props.icon,
        html: this.props.html
      });
    }
  }

  render() {
    const {
      size,
      icon,
      html,
      spin = false,
      children,
      className,
      ...restProps
    } = this.props;

    const classNames = ["entypo-icon"];
    if (spin) {
      classNames.push("entypo-icon-spin");
    }
    if (className) {
      classNames.push(className);
    }

    const finalProps = {
      ...restProps,
      className: classNames.join(" "),
      viewBox: `0 0 ${size} ${size}`,
      width: `${size}px`,
      height: `${size}px`
    };

    return (
      <svg {...finalProps}>
        <use xlinkHref={`#entypo-icon-${icon}`} />
      </svg>
    );
  }
}
