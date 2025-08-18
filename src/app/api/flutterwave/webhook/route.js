// pages/api/flutterwave/webhook.ts
import { NextResponse } from 'next/server';
import { confirmBookingViaBridge, fetchBooking } from '@/app/api';

export const config = { api: { bodyParser: false } };

export async function POST(req) {
  try {
    // 1. Verify signature
    const signature = req.headers.get('verif-hash');
    const webhookSecret = process.env.INTERNAL_SIGNING_SECRET;

    if (!signature || signature !== webhookSecret) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid signature' },
        { status: 401 }
      );
    }

    // 2. Parse body
    const rawBody = await req.text();
    const event = JSON.parse(rawBody);

    // 3. Process successful payment
    if (event.event === 'charge.completed' || event?.status === 'successful') {

      const tx_ref = event.data?.tx_ref; // "bk_118_22037adb-be29-43e7-9fc8-d7954e635b73"
      const bookingId = tx_ref.split('_')[1]; // Extracts "118" from the example
      
      console.log(typeof bookingId, bookingId)

      if (!bookingId || isNaN(bookingId)) {
        return NextResponse.json(
          { error: 'Missing or invalid bookingId in metadata' },
          { status: 400 }
        );
      }
      console.log('helooooooo...................', event)

      // Optional amount verification
      const booking = await fetchBooking(bookingId);
      const expectedAmount = Math.round(Number(booking?.total_price ?? booking?.total ?? 0));
      const paidAmount = Math.round(Number(event?.amount ?? 0));

      if (expectedAmount > 0 && paidAmount < expectedAmount) {
        return NextResponse.json(
          { error: `Underpayment: Paid ${paidAmount}, expected ${expectedAmount}` },
          { status: 400 }
        );
      }

      // Confirm booking
      await confirmBookingViaBridge(
        bookingId,
        'flutterwave',
        event?.tx_ref || event?.id || 'unknown'
      );
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
