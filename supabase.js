
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://louhwxyupaxnqqsxnxph.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvdWh3eHl1cGF4bnFxc3hueHBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5OTU5NTMsImV4cCI6MjAxMzU3MTk1M30.UBETplwh3c6h74H_stG9kjA6bD5_o293lKEacOgUv6Q"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;