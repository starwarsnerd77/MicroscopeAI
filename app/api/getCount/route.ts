import { supabase } from '@/lib/supabase';

export async function GET(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  const today = new Date().toISOString().slice(0, 10);

  const { data: usage } = await supabase
    .from('ip_usage')
    .select('count')
    .eq('ip', ip)
    .eq('date', today)
    .single();

  if (usage && usage.count) {
    return new Response(JSON.stringify({ count: usage?.count }))
  }

  return new Response(JSON.stringify({ count: 0 }));
}
