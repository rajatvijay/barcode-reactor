import React from "react";
import { css } from "emotion";

const Header = () => {
  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: white;
        color: black;
        text-align: center;
        font-size: 18px;
        padding: 15px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.12);
      `}
    >
      <span>Bluecode Barcode Reactor</span>
    </div>
  );
};

export default Header;
