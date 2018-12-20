import { EntypoIconName } from "entypo-icons-core";
import { EntypoManager, EntypoManagerEntity } from "entypo-icons-utils";
import * as React from "react";

export interface EntypoIconProps extends React.SVGAttributes<SVGElement> {
  readonly size: number;
  readonly icon?: EntypoIconName;
  readonly spin?: boolean;
  readonly entity?: EntypoManagerEntity;
}

export class EntypoIcon extends React.PureComponent<EntypoIconProps> {
  componentDidMount() {
    if (this.props.entity) {
      EntypoManager.addIcons(this.props.entity);
    }
  }

  render() {
    const {
      size,
      icon,
      entity,
      spin = false,
      children,
      className,
      ...restProps
    } = this.props;

    const finalIcon = entity ? entity.icon : icon;

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
        <use xlinkHref={`#entypo-icon-${finalIcon}`} />
      </svg>
    );
  }
}
