import { NextResponse } from 'next/server';

const WEBHOOK_URLS: Record<string, string | undefined> = {
  contact_submitted: process.env.FORM_WEBHOOK_URL,
  booking_completed: process.env.FORM_WEBHOOK_COMPLETE_URL,
};

export async function POST(req: Request) {
  const { event, data, submittedAt } = await req.json();

  if (process.env.NODE_ENV === 'development') {
    console.log(`[webhook] event="${event}"`, JSON.stringify(data, null, 2));
  }

  const webhookUrl = WEBHOOK_URLS[event];
  if (!webhookUrl) {
    return NextResponse.json({ error: 'Unknown event' }, { status: 400 });
  }

  const payload = JSON.stringify({ event, data, submittedAt });

  if (process.env.NODE_ENV === 'development') {
    console.log(`[webhook] → ${webhookUrl}`, payload);
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log(`[webhook] ← ${res.status} ${res.statusText}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`[webhook] FAILED`, err);
    }
    return NextResponse.json({ error: 'Webhook delivery failed' }, { status: 502 });
  }
}
