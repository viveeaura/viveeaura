// pages/api/flutterwave/initialize.ts
import fetch from 'cross-fetch';
import { NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';

export async function POST(req) {
  try {
    const { id, total_price, currency, customer: { email, first_name, last_name, phone } } = await req.json();

    const tx_ref = `bk_${id}_${uuid()}`;

    const initRes = await fetch('https://api.flutterwave.com/v3/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.FLW_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tx_ref,
        amount: total_price,
        currency: currency || 'NGN',
        redirect_url: `${process.env.NEXT_PUBLIC_WP_BASE_URL_l}?bookingId=${id}&ref=${tx_ref}&gw=flutterwave`,
        customer: { email, name: `${first_name} ${last_name}`, phonenumber: phone, phone_number: phone },
        meta: { bookingId: id },
      }),
    });

    const data = await initRes.json();

    if (data.status !== 'success') {
      return NextResponse.json({ error: data?.message || 'Flutterwave init failed' });
    }

    return NextResponse.json({
      link: data.data.link, // send user here to pay
      tx_ref,
    }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
