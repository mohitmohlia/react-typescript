import { useState } from "react";

function LoggedIn() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const handleLogIn = () => {
    setLoggedIn(true);
  };
  const handleLogOut = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login In</button>
      <button onClick={handleLogOut}>Login out</button>
      <div>user is {isLoggedIn ? "Logged In" : "Logged out"}</div>
    </div>
  );
}

export default LoggedIn;
