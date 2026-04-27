import { NextResponse } from 'next/server';

type FormEvent = 'contact_submitted' | 'application_submitted' | 'booking_completed';

type FormSubmitBody = {
  event?: string;
  data?: Record<string, unknown>;
  submittedAt?: string;
};

const FUNNEL_WEBHOOK_URLS: Record<string, Partial<Record<FormEvent, string | undefined>>> = {
  'creative-multiplier-sprint': {
    contact_submitted: process.env.CREATIVE_MULTIPLIER_SPRINT_FORM_WEBHOOK_URL,
    application_submitted:
      process.env.CREATIVE_MULTIPLIER_SPRINT_FORM_WEBHOOK_APPLICATION_URL ??
      process.env.CREATIVE_MULTIPLIER_SPRINT_FORM_WEBHOOK_URL,
    booking_completed: process.env.CREATIVE_MULTIPLIER_SPRINT_FORM_WEBHOOK_COMPLETE_URL,
  },
};

function isFormEvent(event: string | undefined): event is FormEvent {
  return event === 'contact_submitted' || event === 'application_submitted' || event === 'booking_completed';
}

export async function POST(req: Request) {
  const { event, data = {}, submittedAt } = (await req.json()) as FormSubmitBody;

  if (!isFormEvent(event)) {
    return NextResponse.json({ error: 'Unknown event' }, { status: 400 });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`[webhook] event="${event}"`, JSON.stringify(data, null, 2));
  }

  const funnelId = typeof data.funnelId === 'string' ? data.funnelId : 'default';
  const webhookUrl = FUNNEL_WEBHOOK_URLS[funnelId]?.[event];

  if (!webhookUrl) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[webhook] no URL configured for funnel="${funnelId}" event="${event}"`);
    }
    return NextResponse.json({ ok: false, skipped: true, reason: 'Webhook not configured' }, { status: 202 });
  }

  const payload = JSON.stringify({ event, funnelId, data, submittedAt });

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
