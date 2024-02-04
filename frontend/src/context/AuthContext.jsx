import { createContext, useContext } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const storeToken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  return (
    <AuthContext.Provider value={storeToken}>{children}</AuthContext.Provider>
  );
};

//custom Hook
export const useNew = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth is used outside of provider");
  }
  return authContextValue;
};
