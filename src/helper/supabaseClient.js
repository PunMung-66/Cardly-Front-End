import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jdbyzxmiefxlzglnznji.supabase.co'
const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkYnl6eG1pZWZ4bHpnbG56bmppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3ODc5NDgsImV4cCI6MjA2MDM2Mzk0OH0.Z_yvFoFSgFdDx4XhdziyHuNfokhZoOLVnn8kvO6n84c'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
