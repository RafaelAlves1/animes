import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthGoogleContext } from '../hooks/authGoogle';

export default function PrivateRoutes() {
  const { signed } = useContext(AuthGoogleContext);

  return signed ? <Outlet /> : <Navigate to="/login" />;
}
