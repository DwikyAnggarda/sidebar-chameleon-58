
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

export function useAuthMethods(setLoading: (loading: boolean) => void) {
  const navigate = useNavigate();

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({ email, password });
      
      if (error) {
        toast.error(error.message);
        throw error;
      }
      
      toast.success('Sign up successful! Check your email for verification.');
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) {
        toast.error(error.message);
        throw error;
      }

      toast.success('Signed in successfully!');
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      toast.info('Connecting to Google authentication...');
      
      console.log('Attempting to sign in with Google...');
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `https://preview--sidebar-chameleon-58.lovable.app/dashboard`,
        },
      });
      
      if (error) {
        console.error('Google sign in error details:', error);
        
        if (error.message.includes('provider is not enabled')) {
          toast.error('Google authentication is not enabled. Please enable it in the Supabase dashboard.');
          console.error('Google provider not enabled. Please configure it in your Supabase project.');
        } else {
          toast.error(`Google sign in error: ${error.message}`);
        }
        throw error;
      }
      
      if (data) {
        console.log('Google sign in initiated successfully, awaiting redirect');
      }
    } catch (error) {
      console.error('Google sign in error:', error);
      toast.error('Failed to connect to Google. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast.error(error.message);
        throw error;
      }
      
      toast.success('Signed out successfully');
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (password: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.updateUser({ password });
      
      if (error) {
        toast.error(error.message);
        throw error;
      }
      
      toast.success('Password updated successfully!');
    } finally {
      setLoading(false);
    }
  };

  return {
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    changePassword
  };
}
