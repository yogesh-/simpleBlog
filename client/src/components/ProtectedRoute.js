import { Navigate, Route } from "react-router-dom";

export default function ProtectedRoute({ element, ...rest }) {
  // Check if the user is authenticated (e.g., by checking local storage)
  const isAuthenticated = localStorage.getItem("token") !== null;

  if (isAuthenticated) {
    return element;
  } else <Navigate to="/login" replace />;
}
