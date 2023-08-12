import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "../../shared";

function DarkModeButton() {
  const [colorTheme, setTheme] = useDarkMode();
  const [isDarkMode, setDarkMode] = useState(colorTheme === "light");
  const toggleDarkMode = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setTheme(newTheme);
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={22} />
  );
}

export default DarkModeButton;
