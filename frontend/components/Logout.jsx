import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNew } from "../src/context/AuthContext";

// export const Logout = () => {
//     const LogoutUser = useNew()
//   useEffect(() => {
//     LogoutUser();
//   }, [LogoutUser]);
//   return <Navigate to="/login" />;
// };

const Logout = () => {
  const { LogoutUser } = useNew();
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  return <Navigate to="/login" />;
};

export default Logout;
