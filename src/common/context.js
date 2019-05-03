import React from "react";

const defaults = {
  primaryColor: "#000",
  secondaryColor: "#fff"
};

export const AppContext = React.createContext(defaults);

export default AppContext;
