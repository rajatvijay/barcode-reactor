import React from "react";
import { css } from "emotion";
import { calculateChecksum } from "../barcodeCalculator";

class Main extends React.Component {
  state = {
    barcodeNumber: "",
    primaryColor: "",
    secondaryColor: "",
    checksum: null
  };

  calculateChecksum = barcodeNumber => {
    const barcodeNumbersArray = barcodeNumber.split("").map(Number);
    const checksum = calculateChecksum(barcodeNumbersArray);
    return checksum;
  };

  updateState = key => e => {
    const { value } = e.target;
    this.setState({ [key]: value });
  };

  updateBarcodeNumber = e => {
    const { value: barcodeNumber } = e.target;

    // Allowing only a maximum of 19 digits
    if (!barcodeNumber || barcodeNumber.length <= 19) {
      const checksum = this.calculateChecksum(barcodeNumber);
      this.updateState("barcodeNumber")({ target: { value: barcodeNumber } });
      this.updateState("checksum")({ target: { value: checksum } });
    }
  };

  render() {
    const {
      barcodeNumber,
      primaryColor,
      secondaryColor,
      checksum
    } = this.state;
    return (
      <div
        className={css`
          max-width: 800px;
          margin: auto;
        `}
      >
        <div>
          <input
            placeholder="Barcode Number"
            onChange={this.updateBarcodeNumber}
            value={barcodeNumber}
            maxLength={19}
            type="number"
          />
          <input
            placeholder="Primary Color"
            onChange={this.updateState("primaryColor")}
            value={primaryColor}
          />
          <input
            placeholder="Secondary Color"
            onChange={this.updateState("secondaryColor")}
            value={secondaryColor}
          />
          {checksum}
        </div>
      </div>
    );
  }
}

export default Main;
