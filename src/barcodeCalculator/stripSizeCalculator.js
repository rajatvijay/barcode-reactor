/* eslint-disable import/prefer-default-export */

const getHeightAndWidthRatios = () => {
  return [
    { height: 1, width: 1 }, // 0
    { height: 2, width: 1 }, // 1
    { height: 3, width: 1 }, // 2
    { height: 4, width: 1 }, // 3
    { height: 1, width: 2 }, // 4
    { height: 2, width: 2 }, // 5
    { height: 3, width: 2 }, // 6
    { height: 4, width: 2 }, // 7
    { height: 1, width: 3 }, // 8
    { height: 2, width: 3 } // 9
  ];
};

const getHeightAndWidthMultiplicationFactor = size => {
  if (size === "small") {
    return {
      height: 40,
      width: 20
    };
  }
  return {
    height: 80,
    width: 40
  };
};

export const getHeigtAndWidthForAStrip = (noOnStrip, size) => {
  const {
    height: heightMultiplicationFactor,
    width: widthMultiplicationFactor
  } = getHeightAndWidthMultiplicationFactor(size);
  const { height: heightRatio, width: widthRatio } = getHeightAndWidthRatios()[
    noOnStrip
  ];
  return {
    height: heightRatio * heightMultiplicationFactor,
    width: widthRatio * widthMultiplicationFactor
  };
};
