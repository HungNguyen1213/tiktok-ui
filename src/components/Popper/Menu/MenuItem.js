import React from "react";
import classNames from "classnames/bind";

import styles from "./menu.module.scss";

import { Button } from "@/components/Button";

const cx = classNames.bind(styles);

export const MenuItem = ({ data, onClick }) => {
  return (
    <Button leftIcon={data.icon} className={cx("menu-item")} onClick={onClick}>
      {data.title}
    </Button>
  );
};
