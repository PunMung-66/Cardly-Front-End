import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dnhqihzuihxfhssypfog.supabase.co'
const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuaHFpaHp1aWh4Zmhzc3lwZm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MzY3NDAsImV4cCI6MjA1NjMxMjc0MH0.bMcPQyMi1CTKD_JjQegYRe9PntrPDUFQQnyxubM_U3M'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
