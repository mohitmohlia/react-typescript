import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Box() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.secondary.main,
        color: theme.secondary.text,
      }}
    >
      Box
    </div>
  );
}

export default Box;
