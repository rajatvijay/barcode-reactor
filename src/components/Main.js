import React from "react";
import { css } from "emotion";
import { calculateChecksum } from "../barcodeCalculator";
import BarcodeDisplayer from "./BarcodeDisplayer";
import {
  AppContext,
  Input,
  saveItem,
  getItem,
  DEFAULT_COLORS
} from "../common";
import Header from "./Header";

class Main extends React.Component {
  state = {
    barcodeNumber: "",
    colors: getItem("colors") || DEFAULT_COLORS,
    checksum: null,
    formattedBarcodeNumbers: []
  };

  calculateChecksum = barcodeNumber => {
    const barcodeNumbersArray = barcodeNumber.split("").map(Number);
    const checksum = calculateChecksum(barcodeNumbersArray);
    return checksum;
  };

  updateColor = key => e => {
    const { value } = e.target;
    this.setState(
      state => ({ colors: { ...state.colors, [key]: value } }),
      () => {
        const { colors } = this.state;
        saveItem("colors", colors);
      }
    );
  };

  updateBarcodeNumbers = e => {
    const { value: barcodeNumber } = e.target;

    // Allowing only a maximum of 19 digits
    if (!barcodeNumber || barcodeNumber.length <= 19) {
      const checksum = this.calculateChecksum(barcodeNumber);
      this.setState({
        barcodeNumber,
        checksum,
        formattedBarcodeNumbers: barcodeNumber.split("").map(Number)
      });
    }
  };

  render() {
    const {
      barcodeNumber,
      checksum,
      formattedBarcodeNumbers,
      colors
    } = this.state;
    return (
      <React.Fragment>
        <Header />

        <div
          className={css`
            max-width: 700px;
            margin: auto;
            min-height: 100vh;
            padding: 80px 10px 0 10px;
            text-align: center;
          `}
        >
          <AppContext.Provider value={colors}>
            <div>
              <Input
                placeholder="Barcode Number"
                onChange={this.updateBarcodeNumbers}
                value={barcodeNumber}
                maxLength={19}
                type="number"
                className={css`
                  max-width: 400px;
                `}
              />
              <div
                className={css`
                  display: flex;
                  justify-content: center;
                  margin-top: 10px;

                  input {
                    width: 45px;
                    height: 45px;
                  }
                `}
              >
                <input
                  type="color"
                  placeholder="Primary Color"
                  onChange={this.updateColor("primaryColor")}
                  value={colors.primaryColor}
                />
                <input
                  type="color"
                  placeholder="Secondary Color"
                  onChange={this.updateColor("secondaryColor")}
                  value={colors.secondaryColor}
                />
              </div>
              <div
                className={css`
                  margin-top: 40px;
                `}
              >
                {barcodeNumber ? (
                  <BarcodeDisplayer
                    barcodeNumbers={formattedBarcodeNumbers}
                    checksum={checksum}
                  />
                ) : (
                  <p
                    className={css`
                      color: dimgray;
                      font-size: 14px;
                    `}
                  >
                    Please enter number to see the barcode
                  </p>
                )}
              </div>
            </div>
          </AppContext.Provider>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
