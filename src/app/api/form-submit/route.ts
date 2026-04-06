import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { webhookUrl, data, submittedAt } = await req.json();

  if (!webhookUrl || typeof webhookUrl !== 'string') {
    return NextResponse.json({ error: 'Missing webhookUrl' }, { status: 400 });
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data, submittedAt }),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Webhook delivery failed' }, { status: 502 });
  }
}
