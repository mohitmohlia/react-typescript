import { useState } from "react";
import UserType from "../types/User.type";

function User() {
  const [user, setUser] = useState<UserType | null>(null);

  const handleLogOut = () => {
    setUser(null);
  };
  const handleLogIn = () => {
    setUser({ name: "mohit", email: "mohit@xyz.com" });
  };
  return (
    <div>
      <button onClick={handleLogOut}>Log out</button>
      <button onClick={handleLogIn}>Log In</button>
      <div>User name is {user?.name || "Logout"}</div>
      <div>User email is {user?.email || "Logout@xyz.com"}</div>
    </div>
  );
}

export default User;
