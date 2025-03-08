
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lksszjgosnapelrsttpa.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrc3N6amdvc25hcGVscnN0dHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMDE1NTAsImV4cCI6MjA1Njc3NzU1MH0.FYvA4nt8HN4MtBHeehfCy6tU2AaupTDI4w7U3kgiSnk"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;