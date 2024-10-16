import { supabase } from './supabase';

export async function createListicle(data: any) {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }
  const { data: listicle, error } = await supabase
    .from('listicles')
    .insert(data)
    .single();

  if (error) throw error;
  return listicle;
}

export async function getListicles() {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }
  const { data: listicles, error } = await supabase
    .from('listicles')
    .select('*');

  if (error) throw error;
  return listicles;
}

export async function updateListicle(id: string, data: any) {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }
  const { data: listicle, error } = await supabase
    .from('listicles')
    .update(data)
    .eq('id', id)
    .single();

  if (error) throw error;
  return listicle;
}

export async function deleteListicle(id: string) {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }
  const { error } = await supabase
    .from('listicles')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Similar functions for items and sites...