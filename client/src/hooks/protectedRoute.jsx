import { useAuth } from './useAuth';
import { Navigate } from 'react-router-dom';
import Loader from '../components/loader/loader.component';
export default function ProtectedRoute({ children }) {
  const auth = useAuth();

  if (auth.loading === true) return <Loader />;
  return auth.user ? children : <Navigate to='/login' replace />;
}




