import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase admin environment variables');
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export async function createTables() {
  const { error: listiclesError } = await supabaseAdmin.rpc('create_listicles_table');
  if (listiclesError) console.error('Error creating listicles table:', listiclesError);

  const { error: itemsError } = await supabaseAdmin.rpc('create_items_table');
  if (itemsError) console.error('Error creating items table:', itemsError);

  const { error: sitesError } = await supabaseAdmin.rpc('create_sites_table');
  if (sitesError) console.error('Error creating sites table:', sitesError);

  console.log('Tables created successfully');
}