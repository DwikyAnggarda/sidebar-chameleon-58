
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { Role } from '@/context/types/auth.types';

export async function fetchUserRole(userId: string): Promise<Role | null> {
  try {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching user role:', error);
      return null;
    }

    if (data) {
      return data.role as Role;
    }
    return null;
  } catch (error) {
    console.error('Error in fetchUserRole:', error);
    return null;
  }
}
