import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: unknown; source?: unknown };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const source = typeof body.source === 'string' ? body.source : 'landing_page';

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from('waitlist').insert({ email, source });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'duplicate' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
