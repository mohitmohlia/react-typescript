import React, { useState, createContext } from "react";
import UserType from "../types/User.type";
type UserContextProviderProp = {
  children: React.ReactNode;
};

type UserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export const UserContext = createContext({} as UserContextType);

function UserContextProvider({ children }: UserContextProviderProp) {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
