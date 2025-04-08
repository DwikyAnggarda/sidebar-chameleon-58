
import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { fetchUserRole } from '@/utils/authUtils';
import { Role } from '@/context/types/auth.types';

export function useAuthState() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Setup the auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        // If session exists, fetch role
        if (currentSession?.user) {
          // We use setTimeout to prevent Supabase auth state deadlocks
          setTimeout(() => {
            fetchUserRole(currentSession.user.id).then(userRole => {
              setRole(userRole);
            });
          }, 0);
        } else {
          setRole(null);
        }
      }
    );

    // Then get the initial session
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      setSession(initialSession);
      setUser(initialSession?.user ?? null);
      
      if (initialSession?.user) {
        fetchUserRole(initialSession.user.id).then(userRole => {
          setRole(userRole);
        });
      }
      
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    session,
    role,
    loading,
    setLoading
  };
}
