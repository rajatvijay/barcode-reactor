import React from "react";
import { css } from "emotion";
import BarcodeStrip from "./BarcodeStrip";

const BarcodeDisplayer = ({ style, barcodeNumbers, checksum }) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
      style={style}
    >
      {barcodeNumbers.map(num => (
        <BarcodeStrip type="primary" num={num} />
      ))}
      {checksum ? <BarcodeStrip type="secondary" num={checksum} /> : null}
    </div>
  );
};

export default BarcodeDisplayer;
