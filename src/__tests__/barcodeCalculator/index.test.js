import {
  calculateChecksum,
  getHeigtAndWidthForAStrip
} from "../../barcodeCalculator";

// Checksum calculation from the example
it("Checksum for question example aka [5, 4, 8, 9, 8, 5, 0, 3, 5, 4] is 7", () => {
  const checksum = calculateChecksum([5, 4, 8, 9, 8, 5, 0, 3, 5, 4]);
  expect(checksum).toBe(7);
});

// Checksum calculation with single digit
it("Checksum for single digit aka [5] is 5", () => {
  const checksum = calculateChecksum([5]);
  expect(checksum).toBe(5);
});

// Checksum calculation with no digits
it("Checksum for no digit aka [] is 0", () => {
  const checksum = calculateChecksum([]);
  expect(checksum).toBe(0);
});

// Checksum calculation with no digits
it("Checksum for all 19 digits aka [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 4] is 1", () => {
  const checksum = calculateChecksum([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    4
  ]);
  expect(checksum).toBe(1);
});

// Strip height and width for 1st strip and small size
it("Dimensions for 1st strip and small screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(0, "small");
  expect(dimensions).toEqual({ height: 40, width: 20 });
});

// Strip height and width for 1st strip and large size
it("Dimensions for 1st strip and large screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(0, "large");
  expect(dimensions).toEqual({ height: 80, width: 40 });
});

// Strip height and width for 2nd strip and small size
it("Dimensions for 2nd strip and small screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(1, "small");
  expect(dimensions).toEqual({ height: 80, width: 20 });
});

// Strip height and width for 2nd strip and large size
it("Dimensions for 2nd strip and large screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(1, "large");
  expect(dimensions).toEqual({ height: 160, width: 40 });
});

// Strip height and width for 3rd strip and small size
it("Dimensions for 3rd strip and small screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(2, "small");
  expect(dimensions).toEqual({ height: 120, width: 20 });
});

// Strip height and width for 3rd strip and large size
it("Dimensions for 3rd strip and large screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(2, "large");
  expect(dimensions).toEqual({ height: 240, width: 40 });
});

// Strip height and width for 4th strip and small size
it("Dimensions for 4th strip and small screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(3, "small");
  expect(dimensions).toEqual({ height: 160, width: 20 });
});

// Strip height and width for 4th strip and large size
it("Dimensions for 4th strip and large screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(3, "large");
  expect(dimensions).toEqual({ height: 320, width: 40 });
});

// Strip height and width for 5th strip and small size
it("Dimensions for 5th strip and small screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(4, "small");
  expect(dimensions).toEqual({ height: 40, width: 40 });
});

// Strip height and width for 5th strip and large size
it("Dimensions for 5th strip and large screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(4, "large");
  expect(dimensions).toEqual({ height: 80, width: 80 });
});

// Strip height and width for 6th strip and small size
it("Dimensions for 6th strip and small screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(5, "small");
  expect(dimensions).toEqual({ height: 80, width: 40 });
});

// Strip height and width for 6th strip and large size
it("Dimensions for 6th strip and large screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(5, "large");
  expect(dimensions).toEqual({ height: 160, width: 80 });
});

// Strip height and width for 7th strip and small size
it("Dimensions for 7th strip and small screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(6, "small");
  expect(dimensions).toEqual({ height: 120, width: 40 });
});

// Strip height and width for 7th strip and large size
it("Dimensions for 7th strip and large screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(6, "large");
  expect(dimensions).toEqual({ height: 240, width: 80 });
});

// Strip height and width for 8th strip and small size
it("Dimensions for 8th strip and small screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(7, "small");
  expect(dimensions).toEqual({ height: 160, width: 40 });
});

// Strip height and width for 8th strip and large size
it("Dimensions for 8th strip and large screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(7, "large");
  expect(dimensions).toEqual({ height: 320, width: 80 });
});

// Strip height and width for 9th strip and small size
it("Dimensions for 9th strip and small screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(8, "small");
  expect(dimensions).toEqual({ height: 40, width: 60 });
});

// Strip height and width for 9th strip and large size
it("Dimensions for 9th strip and large screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(8, "large");
  expect(dimensions).toEqual({ height: 80, width: 120 });
});

// Strip height and width for 10th strip and small size
it("Dimensions for 10th strip and small screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(9, "small");
  expect(dimensions).toEqual({ height: 80, width: 60 });
});

// Strip height and width for 10th strip and large size
it("Dimensions for 10th strip and large screen sizes", () => {
  const dimensions = getHeigtAndWidthForAStrip(9, "large");
  expect(dimensions).toEqual({ height: 160, width: 120 });
});
