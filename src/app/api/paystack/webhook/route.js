// pages/api/paystack/webhook.ts
import { confirmBookingViaBridge, fetchBooking } from '@/app/api';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export const config = { api: { bodyParser: false } }; // raw body for signature

export async function POST(req) {
  try {

    // 1. Verify signature
    const rawBody = await req.text();
    const signature = req.headers.get('x-paystack-signature');
    const generatedSignature = crypto
      .createHmac('sha512', process.env.PAYSTACK_SECRET)
      .update(rawBody)
      .digest('hex');

    if (signature !== generatedSignature) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid signature' },
        { status: 401 }
      );
    }

    // 2. Parse body
    const evt = JSON.parse(rawBody);

    // 3. Process successful payment
    if (evt.event === 'charge.success' && evt.data?.status === 'success') {
      const bookingId = Number(evt.data?.metadata?.id);
      const amountPaidKobo = Number(evt.data?.amount);
      
      if (!bookingId || isNaN(bookingId)) {
        return NextResponse.json(
          { error: 'Missing or invalid bookingId in metadata' },
          { status: 400 }
        );
      }
      
      // Optional: sanity check against current booking total in WP
      const booking = await fetchBooking(bookingId);
      const expected = Math.round(Number(booking?.total_price ?? booking?.total ?? 0)) * 100; // kobo

      if (expected && amountPaidKobo < expected) {
        return NextResponse.json(
          { error: `Underpayment: Paid ${paidAmount}, expected ${expectedAmount}` },
          { status: 400 }
        );
      }

      //paypal to represent paystack since motopress lite does not recognize it 
      const checking = await confirmBookingViaBridge(bookingId, 'paypal', evt.data.reference, booking?.total_price);
      console.log('checking', checking)

    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

