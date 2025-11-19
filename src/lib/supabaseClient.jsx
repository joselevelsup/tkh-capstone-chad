import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pzqpjhdalynqqdtztgxj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6cXBqaGRhbHlucXFkdHp0Z3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMzUwNjksImV4cCI6MjA3ODgxMTA2OX0.P5MORVHxQwRMKAZwoPpci-nvsMr6zYykWPPVtwLUE_Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

















