import { useState } from "react";
import UserType from "../types/User.type";

function UserTypeAssertion() {
  const [user, setUser] = useState<UserType>({} as UserType);

  //   const handleLogOut = () => {
  //     setUser(null);
  //   };
  const handleLogIn = () => {
    setUser({ name: "mohit", email: "mohit@xyz.com" });
  };
  return (
    <div>
      {/* <button onClick={handleLogOut}>Log out</button> */}
      <button onClick={handleLogIn}>Log In</button>
      <div>User name is {user.name || "logged out"}</div>
      <div>User email is {user.email || "random@email.com"}</div>
    </div>
  );
}

export default UserTypeAssertion;
