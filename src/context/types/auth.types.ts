
import { User, Session } from '@supabase/supabase-js';

export type Role = 'admin' | 'customer';

export type AuthContextType = {
  user: User | null;
  session: Session | null;
  role: Role | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  changePassword: (password: string) => Promise<void>;
  loading: boolean;
};
