import React from "react";
import { css } from "emotion";
import { getHeigtAndWidthForAStrip } from "../barcodeCalculator";
import { AppContext } from "../common";
import { isMobile } from "../common/utils";

const getHeightAndWidthCSSString = noOnStrip => {
  const screenSize = isMobile() ? "small" : "large";
  const { height, width } = getHeigtAndWidthForAStrip(noOnStrip, screenSize);
  return `
    height: ${height}px;
    width: ${width}px;
  `;
};

const BarcodeStrip = ({ type = "primary", num }) => {
  // If num is `falsy` but not 0
  if (num !== 0 && !num) {
    return null;
  }

  if (type === "secondary") {
    return (
      <AppContext.Consumer>
        {colors => (
          <div
            className={css`
              background-color: ${colors.secondaryColor};
              border: 1px solid ${colors.primaryColor};
              display: flex;
              justify-content: center;
              align-items: center;
              color: ${colors.primaryColor};
              ${getHeightAndWidthCSSString(num)}
            `}
          >
            {num}
          </div>
        )}
      </AppContext.Consumer>
    );
  }
  return (
    <AppContext.Consumer>
      {colors => (
        <div
          className={css`
            background-color: ${colors.primaryColor};
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${colors.secondaryColor};
            ${getHeightAndWidthCSSString(num)}
            margin-right: 2px;
          `}
        >
          {num}
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default BarcodeStrip;
