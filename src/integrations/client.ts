// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://brhcfcexojvyaaqdcitn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyaGNmY2V4b2p2eWFhcWRjaXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNTQ2MzMsImV4cCI6MjA1NTczMDYzM30.0qT6csbXIM46ixTgCdwurgEfk7QM29P0GYjq846U8QQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
