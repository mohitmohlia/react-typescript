import { useContext } from "react";
import { UserContext } from "./UserContext";
function User() {
  const userContext = useContext(UserContext);
  const handleLogIn = () => {
    userContext.setUser({ name: "mohit", email: "mohit@xyz.com" });
  };
  const handleLogOut = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>User name is {userContext.user?.name || "logged out user"} </div>
      <div>User email is {userContext.user?.email || "no email id"}</div>
    </div>
  );
}

export default User;
