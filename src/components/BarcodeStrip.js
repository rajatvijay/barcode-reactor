import React from "react";
import { css } from "emotion";
import { getHeightAndWidthRatiosForBarcodeStrips } from "../barcodeCalculator";
import { AppContext } from "../common";

const HEIGHT_AND_WIEIGHT_RATIOS = getHeightAndWidthRatiosForBarcodeStrips();
const MULTIPLICATION_FACTOR = 10;

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
              height: ${HEIGHT_AND_WIEIGHT_RATIOS[num].height *
                MULTIPLICATION_FACTOR}px;
              width: ${HEIGHT_AND_WIEIGHT_RATIOS[num].width *
                MULTIPLICATION_FACTOR}px;
            `}
          >
            {/* {num} */}
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
            height: ${HEIGHT_AND_WIEIGHT_RATIOS[num].height *
              MULTIPLICATION_FACTOR}px;
            width: ${HEIGHT_AND_WIEIGHT_RATIOS[num].width *
              MULTIPLICATION_FACTOR}px;
            margin-right: 2px;
          `}
        >
          {/* {num} */}
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default BarcodeStrip;
