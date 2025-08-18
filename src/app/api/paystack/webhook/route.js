// pages/api/paystack/webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import fetch from 'cross-fetch';
import { mphbConfirmBookingViaBridge, mphbGetBooking } from '../../../lib/wp';

export const config = { api: { bodyParser: false } }; // raw body for signature

function readBody(req: NextApiRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => (data += chunk));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const secret = process.env.PAYSTACK_SECRET!;
    const raw = await readBody(req);
    const signature = req.headers['x-paystack-signature'] as string;
    const hash = crypto.createHmac('sha512', secret).update(raw).digest('hex');
    if (hash !== signature) return res.status(401).end('Invalid signature');

    const evt = JSON.parse(raw);

    if (evt.event === 'charge.success' && evt.data?.status === 'success') {
      const bookingId = Number(evt.data?.metadata?.bookingId);
      const amountPaidKobo = Number(evt.data?.amount);
      if (!bookingId) return res.status(400).end('No bookingId in metadata');

      // Optional: sanity check against current booking total in WP
      const booking = await mphbGetBooking(bookingId);
      const expected = Math.round(Number(booking?.total_price ?? booking?.total ?? 0)) * 100; // kobo
      if (expected && amountPaidKobo < expected) {
        return res.status(400).end('Underpayment');
      }

      await mphbConfirmBookingViaBridge(bookingId, 'paystack', evt.data.reference);
    }

    res.status(200).end('OK');
  } catch (e: any) {
    res.status(500).end(e.message);
  }
}

