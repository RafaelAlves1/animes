import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { app } from '../services/firebaseConfig';

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export default function AuthGoogleProvider({ children }) {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    function loadStoreAuth() {
      const sessionToken = sessionStorage.getItem('@AuthAnimes:token');
      const sessionUser = sessionStorage.getItem('@AuthAnimes:user');
      if (sessionToken && sessionUser) {
        setUser(sessionUser);
      }
    }
    loadStoreAuth();
  }, []);

  function signInGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem('@AuthAnimes:token', token);
        sessionStorage.setItem('@AuthAnimes:user', JSON.stringify(user));
        toast.success(`Bem Vindo, ${user.displayName}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function signOut() {
    sessionStorage.clear();
    setUser(null);
    toast.success('Te esperamos novamente!');

    return <Navigate to="/login" />;
  }

  return (
    <AuthGoogleContext.Provider
      value={{
        signInGoogle,
        signed: !!user,
        user,
        signOut,
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
}
