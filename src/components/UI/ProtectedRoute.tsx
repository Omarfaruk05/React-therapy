import { useEffect, useState } from "react";
import LoginPage from "../../pages/LoginPage";

const ProtectedRoute = ({ children }: any) => {
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setToken(token);
  }, [token, setToken]);

  return token ? children : <LoginPage />;
};

export default ProtectedRoute;
