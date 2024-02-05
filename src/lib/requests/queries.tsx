import { Database } from '~/database.types';
import { SupabaseClient } from '@supabase/supabase-js';
 
type Client = SupabaseClient<Database>;
 
export async function fetchRequests(
  client: Client,
  userId: string
) {
  return client
    .from('requests')
    .select(
      `
      id,
      title
  `
    )
    .eq('user_id', userId);
}

export async function fetchPostById(
    client: Client,
    id: string
  ) {
    return client
      .from('requests')
      .select(
        `
        id,
        title
    `
      )
      .eq('id', id)
      .single();
  }



