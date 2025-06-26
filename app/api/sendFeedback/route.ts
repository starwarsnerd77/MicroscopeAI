import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const { name, email, rating, feedback, category, newsletter } = await req.json()

  const { data: response } = await supabase
    .from('feedback')
    .insert([{ name, email, rating, feedback, category, newsletter }])

  return new Response(JSON.stringify({ success: true }));
}
