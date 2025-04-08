
import { createContext, useContext, ReactNode } from 'react';
import { AuthContextType } from './types/auth.types';
import { useAuthState } from '@/hooks/useAuthState';
import { useAuthMethods } from '@/hooks/useAuthMethods';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, session, role, loading, setLoading } = useAuthState();
  const { signUp, signIn, signInWithGoogle, signOut, changePassword } = useAuthMethods(setLoading);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        role,
        signUp,
        signIn,
        signInWithGoogle,
        signOut,
        changePassword,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
