import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ikggwtnlzsgdkgvusrtu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrZ2d3dG5senNnZGtndnVzcnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NTA2ODEsImV4cCI6MjA2MTUyNjY4MX0.-GVthY_lUIIirWvHpUaRAC6UuN6fTANCkl_x145gM_o';

export const supabase = createClient(supabaseUrl, supabaseKey);