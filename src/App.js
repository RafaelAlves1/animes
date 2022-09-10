import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthGoogleProvider from './hooks/authGoogle';
import AppRoutes from './routes/routes';

function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
      <ToastContainer />

      <CssBaseline />
    </AuthGoogleProvider>
  );
}

export default App;
