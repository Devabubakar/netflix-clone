import { useAuth } from './useAuth';
import { Navigate } from 'react-router-dom';
import Loader from '../components/loader/loader.component';
interface Props {
  children: React.ReactElement;
}
const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const auth = useAuth();

  if (auth!.loading === true) return <Loader />;
  return auth!.user ? children : <Navigate to='/login' replace />;
};

export const RedirectRoute = ({ children }: Props) => {
  const auth = useAuth();
  if (auth!.loading) return <Loader />;
  return auth!.user ? <Navigate to='/browse' replace /> : children;
};

export default ProtectedRoute;
