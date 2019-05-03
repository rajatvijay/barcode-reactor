/**
 * Calculates the sum of items at odd and even indices separately
 * @param {Array<Number>} array
 * @returns {Array<Number>[2]} Array containing
 * sum of odds at 0 and sum of evens at 1
 */
function getOddAndEvenPositionSum(array) {
  let odds = 0;
  let evens = 0;
  array.forEach((num, index) => {
    if ((index + 1) % 2 === 0) {
      // Even case
      evens += num;
    } else {
      // Odd case
      odds += num;
    }
  });
  return [odds, evens];
}

/**
 *
 * @param {Array} numbers Numbers array to calculate checksum for
 * @returns {Number} checksum
 */
export const calculateChecksum = numbers => {
  // Add up the digits in odd and even positions
  const [oddsSum, evensSum] = getOddAndEvenPositionSum(numbers);

  // Multiply oddsSum with 3 and add to evensSum
  const sum = oddsSum * 3 + evensSum;

  // Get the remainder when divide by 10
  const remainder = sum % 10;

  // If the remainder is 0 final result is 0 otherwise
  // subtract it from 10 for final result
  const result = remainder === 0 ? remainder : 10 - remainder;

  return result;
};

export const getHeightAndWidthRatiosForBarcodeStrips = () => {
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

export const getMultiplicationFactor = size => {
  if (size === "small") {
    return [20, 40];
  }
  return [40, 80];
};

export const getHeigtAndWeightForAStrip = (noOnStrip, size) => {
  const [
    widthMultiplicationFactor,
    heightMultiplicationFactor
  ] = getMultiplicationFactor(size);
  const { height, width } = getHeightAndWidthRatiosForBarcodeStrips()[
    noOnStrip
  ];
  return {
    height: height * heightMultiplicationFactor,
    width: width * widthMultiplicationFactor
  };
};

export default calculateChecksum;
