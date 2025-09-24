// pages/api/paystack/initialize.ts
import fetch from 'cross-fetch';
import { NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';

export async function POST(req) {
  try {

    const bookingInfo = await req.json()

    const id = bookingInfo.bookingIntent.id;
    const total_price = bookingInfo?.pricing?.basePrice;
    const currency = bookingInfo?.bookingIntent?.currency;
    const email = bookingInfo?.bookingIntent?.customer?.email;
    const first_name = bookingInfo?.bookingIntent?.customer?.first_name;
    const last_name = bookingInfo?.bookingIntent?.customer?.last_name;
    const phone = bookingInfo?.bookingIntent?.customer?.phone;

    // const { id, total_price, currency, customer: { email } } = await req.json();

    const reference = `bk_${id}_${uuid()}`;

    // Paystack needs amount in KOBO
    const amountKobo = total_price * 100;

    const initRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PAYSTACK_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        first_name,
        last_name,
        phone,
        amount: amountKobo,
        currency: currency || 'NGN',
        reference,
        metadata: { id },
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}?bookingId=${id}&ref=${reference}&gw=paystack`,
      }),
    });

    const data = await initRes.json();

    if (!data.status) {
      return NextResponse.json({ error: data?.message || 'Paystack init failed' }, { statu: 400 });
    }

    return NextResponse.json({
      authorization_url: data.data.authorization_url,
      reference,
    }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
