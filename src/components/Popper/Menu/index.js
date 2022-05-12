import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import styles from "./menu.module.scss";

import { Wrapper as PopperWrapper } from "@/components/Popper";
import { MenuItem } from "./MenuItem";
import { Header } from "./Header";

const cx = classNames.bind(styles);

export const Menu = ({ children, items = [] }) => {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() =>
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      placement="bottom-end"
      interactive={true}
      delay={[0, 700]}
    >
      {children}
    </Tippy>
  );
};
