import { NextResponse } from "next/server";

export async function GET(req) {
  try {

    const id = req.nextUrl.searchParams.get("id")

    const url = id
      ? `https://viveeaura.org/wp-json/mphb/v1/reviews/${id}`
      : `https://viveeaura.org/wp-json/mphb/v1/reviews`;

    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "something went wrong, pls try again" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const accommodationReview = await req.json();

    // Basic validation (customize as needed)
    if (!accommodationReview.rating || !accommodationReview.review) {
      return NextResponse.json(
        { message: "Rating and comment are required" },
        { status: 400 }
      );
    }

    const response = await fetch('https://viveeaura.org/wp-json/mphb/v1/reviews', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accommodationReview)
    });

    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "something went wrong, pls try again" }, { status: 500 });
  }
}
