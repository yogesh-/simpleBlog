import { Navigate, Route } from "react-router-dom";

export default function ProtectedRoute({ element, ...rest }) {
  // Check if the user is authenticated (e.g., by checking local storage)
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
}
