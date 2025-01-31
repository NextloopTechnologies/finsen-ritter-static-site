import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oyydnkqspscqtzkgxjll.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95eWRua3FzcHNjcXR6a2d4amxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMjI2MDMsImV4cCI6MjA1Mzg5ODYwM30.1z9rtEiG0qmyBc19hqr3dWEuptS-VGb82rfPAsBxz_o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
