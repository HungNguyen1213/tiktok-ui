import React from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./accountItem.module.scss";

const cx = classNames.bind(styles);

export const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1631890742705154~c5_300x300.webp?x-expires=1652497200&x-signature=yHE%2BfH9WX7cbG%2BmWY%2FPObTee4nU%3D"
        alt="avatar"
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
};
