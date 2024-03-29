//context api
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [uniqueUser, setUniqueUser] = useState("");
  const [isLoding, setIsloding] = useState(true);

  const authToken = `${token}`;

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

  // ====> in this part od code ,if the user is loggedin then his data will show in contact page.
  // like auto fill form.so the user dont have to fill their name and email again (starts) ------------>

  const authenticateUser = async () => {
    // we can do this
    try {
      setIsloding(true);
      const response = await fetch("http://localhost:4000/api/unique_user", {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("data of unique user", data.userData);
        setUniqueUser(data.userData);
        setIsloding(false);
      } else {
        console.error("error fetching user data");
        setIsloding(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  //  Ends ------------>

  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        storeToken,
        LogoutUser,
        uniqueUser,
        authToken,
        isLoding,
      }}
    >
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
