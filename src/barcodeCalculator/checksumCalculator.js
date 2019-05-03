/* eslint-disable import/prefer-default-export */

/**
 * Calculates the sum of items at odd and even indices separately
 * @param {Array<Number>} array
 * @returns {Array<Number>[2]} Array containing
 * sum of odds at 0 and sum of evens at 1
 */
const getOddAndEvenPositionedItemSum = array => {
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
};

/**
 * Calculates the checksum from the given numbers array
 * @param {Array} numbers Numbers array to calculate checksum for
 * @returns {Number} checksum
 */
export const calculateChecksum = numbers => {
  // Add up the digits in odd and even positions
  const [oddsSum, evensSum] = getOddAndEvenPositionedItemSum(numbers);

  // Multiply oddsSum with 3 and add to evensSum
  const sum = oddsSum * 3 + evensSum;

  // Get the remainder when divide by 10
  const remainder = sum % 10;

  // If the remainder is 0 final result is 0 otherwise
  // subtract it from 10 for final result
  const result = remainder === 0 ? remainder : 10 - remainder;

  return result;
};
