import { NextResponse } from 'next/server';

const WEBHOOK_URLS: Record<string, string | undefined> = {
  contact_submitted: process.env.FORM_WEBHOOK_URL,
  booking_completed: process.env.FORM_WEBHOOK_COMPLETE_URL,
};

export async function POST(req: Request) {
  const { event, data, submittedAt } = await req.json();

  const webhookUrl = WEBHOOK_URLS[event];
  if (!webhookUrl) {
    return NextResponse.json({ error: 'Unknown event' }, { status: 400 });
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, data, submittedAt }),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Webhook delivery failed' }, { status: 502 });
  }
}
