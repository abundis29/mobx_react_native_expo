// themeProvider.js

import THEMES from "./themes.json";
import React, { useContext, useState } from "react";

export const themes = THEMES;

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeID, setThemeID] = useState(THEMES[1].key);

  return (
    <ThemeContext.Provider value={{ themeID, setThemeID }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component) {
  return props => {
    const { themeID, setThemeID } = useContext(ThemeContext);
    const getTheme = themeID => THEMES.find(theme => theme.key === themeID);
    const setTheme = themeID => setThemeID(themeID);
    return (
      <Component
        {...props}
        themes={themes}
        theme={getTheme(themeID)}
        setTheme={setTheme}
      />
    );
  };
}
