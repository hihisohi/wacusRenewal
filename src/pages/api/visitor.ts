import { getClientIp } from 'request-ip';

export async function get({ request }) {
  const referer = request.headers.get('referer') || 'Direct Traffic';
  const userAgent = request.headers.get('user-agent');
  const ip = getClientIp(request);

  return new Response(
    JSON.stringify({ referer, userAgent, ip }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}