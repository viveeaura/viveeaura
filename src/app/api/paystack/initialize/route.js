// pages/api/paystack/initialize.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'cross-fetch';
import { verifySignedPayload } from '../../../lib/payments';
import { v4 as uuid } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') return res.status(405).end();
    const { paymentIntent, email } = req.body;
    const { bookingId, amount, currency } = verifySignedPayload(paymentIntent);

    const reference = `bk_${bookingId}_${uuid()}`;

    // Paystack needs amount in KOBO
    const amountKobo = amount * 100;

    const initRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PAYSTACK_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amountKobo,
        currency: currency || 'NGN',
        reference,
        metadata: { bookingId },
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?bookingId=${bookingId}&ref=${reference}&gw=paystack`,
      }),
    });

    const data = await initRes.json();
    if (!data.status) {
      return res.status(400).json({ error: data?.message || 'Paystack init failed' });
    }

    res.status(200).json({
      authorization_url: data.data.authorization_url,
      reference,
    });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}
