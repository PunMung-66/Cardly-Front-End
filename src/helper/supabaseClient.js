import { createClient } from '@supabase/supabase-js'
import { supabaseUrl, supabaseAnonKey } from '../config/Config'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
