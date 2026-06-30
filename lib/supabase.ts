import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Browser-safe client, scoped by the anon key and Row Level Security.
 * Safe to import from client components.
 */
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

/**
 * Service-role client that bypasses Row Level Security entirely.
 * SUPABASE_SERVICE_ROLE_KEY is a server-only env var (no NEXT_PUBLIC_
 * prefix), so it is never inlined into the client bundle - but treat this
 * export as server-only by convention too: only import it from API routes,
 * server actions, server components, or background jobs. Never import it
 * into a 'use client' component.
 */
export const supabaseAdmin = createClient<Database>(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } },
);
