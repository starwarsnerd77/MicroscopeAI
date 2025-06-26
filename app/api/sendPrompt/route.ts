import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  const today = new Date().toISOString().slice(0, 10);
  const promptLimit = 5;

  const { data: usage } = await supabase
    .from('ip_usage')
    .select('count')
    .eq('ip', ip)
    .eq('date', today)
    .single();

  if (usage && usage.count >= promptLimit) {
    return new Response(JSON.stringify({ error: 'Prompt limit reached.' }), { status: 429 });
  }

  if (usage) {
    await supabase
      .from('ip_usage')
      .update({ count: usage.count + 1 })
      .eq('ip', ip)
      .eq('date', today);
  } else {
    await supabase
      .from('ip_usage')
      .insert([{ ip, date: today, count: 1 }]);
  }

  // Continue with OpenAI prompt processing...
  return new Response(JSON.stringify({ success: true }));
}
