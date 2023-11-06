import { createClient } from '@supabase/supabase-js'

export const supabase = createClient("https://egyomdfxhfhtgokfnjae.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVneW9tZGZ4aGZodGdva2ZuamFlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODY1NzkzMiwiZXhwIjoyMDE0MjMzOTMyfQ.CF_RgDkufjchEmRSFJSPiOdgrS_guVm1PNPvvTY-KR0", {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    },
})

export const adminClient = supabase.auth.admin

export const publicUrl = supabase.storage.from('bucket').getPublicUrl('filePath.jpg');


