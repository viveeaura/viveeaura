// pages/api/flutterwave/webhook.ts
import { NextResponse } from 'next/server';
import { confirmBookingViaBridge, fetchBooking } from '@/app/api';

export const config = { api: { bodyParser: false } };

export async function POST(req) {
  try {
    // 1. Verify signature
    const signature = req.headers.get('verif-hash');
    const webhookSecret = process.env.NEXT_PUBLIC_INTERNAL_SIGNING_SECRET;

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

      const tx_ref = event?.txRef; // "bk_118_22037adb-be29-43e7-9fc8-d7954e635b73"
      const bookingId = tx_ref?.split('_')[1]; // Extracts "118" from the example
            
      if (!bookingId || isNaN(bookingId)) {
        return NextResponse.json(
          { error: 'Missing or invalid bookingId in metadata' },
          { status: 400 }
        );
      }
      
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
        'stripe', //stripe to represent flutterwave since motopress lite does not recognize it 
        tx_ref || event?.id || 'unknown',
        booking?.total_price
      );
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
