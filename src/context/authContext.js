import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/init';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({
    user: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => setAuthState({ ...authState, user, loading: false }),
      (error) => setAuthState({ ...authState, error, loading: false }),
    );
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
}

export const useAuthState = () => {
  const authData = useContext(AuthContext);
  return { ...authData, isAuthenticated: authData.user != null };
};
