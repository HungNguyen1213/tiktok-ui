import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./button.module.scss";

const cx = classNames.bind(styles);

export const Button = ({
  to,
  href,
  onClick,
  children,
  primary,
  outline,
  rounded,
  text,
  small,
  large,
  disabled,
  leftIcon,
  rightIcon,
  className,
  ...passProps
}) => {
  let Component = "button";

  const props = { onClick, ...passProps };

  if (disabled) {
    Object.keys(props).forEach((propKey) => {
      if (propKey.startsWith("on") && typeof props[propKey] === "function") {
        delete props[propKey];
      }
    });
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    rounded,
    text,
    small,
    large,
    disabled,
    [className]: className,
  });

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Component>
  );
};
