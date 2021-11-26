import { useAuth } from './useAuth';
import { Navigate } from 'react-router-dom';
export default function ProtectedRoute({ children }) {
  const auth = useAuth();
  return auth.user ? children : <Navigate to='/login' />;
}

export function RedirectPage({ children }) {
  const auth = useAuth();
  return auth.user ? <Navigate to='/browse' /> : children;
}
