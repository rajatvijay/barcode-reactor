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
