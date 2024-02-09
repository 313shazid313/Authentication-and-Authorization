//context api
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const storeToken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  // logout functionality start ------->
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  // logout functionality end--------->

  let isLoggedin = !!token;
  //if the token is there isLoggedin will be true //otherwise false

  return (
    <AuthContext.Provider value={{ isLoggedin, storeToken, LogoutUser }}>
      {/* isLoggedin first ei likhte hobe // kintu keno?? */}
      {children}
    </AuthContext.Provider>
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
