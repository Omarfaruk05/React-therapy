import LoginPage from "../../pages/LoginPage";

const ProtectedRoute = ({ children }: any) => {
  const email = localStorage.getItem("email");

  return email ? children : <LoginPage />;
};

export default ProtectedRoute;
