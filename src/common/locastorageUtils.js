/**
 * Saves the date with the key in the storage
 * @param {String} key Key corresponding to which data is to be stored
 * @param {any} value Data to be stored
 */
export const saveItem = (key, value) => {
  try {
    const stringifiedValues =
      typeof value !== "string" ? JSON.stringify(value) : value;
    localStorage.setItem(key, stringifiedValues);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

/**
 * Retrieves the data corresponding to the key from the store
 * Returns null in case of no data found
 * @param {String} key Key corresponding to which data is to be retrieved
 */
export const getItem = key => {
  try {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  }
};
