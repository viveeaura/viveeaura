const credentials = btoa(`${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_PASSWORD}`);
const baseUrl = process.env.NEXT_PUBLIC_WP_BASE_URL;

export async function fetchRates() {
  const res = await fetch(`${baseUrl}/rates`, {
    headers: {
      Authorization: `Basic ${credentials}`
    }
  });
  return await res.json();
}

export async function fetchAccommodationTypes() {
  const res = await fetch(`${baseUrl}/accommodation_types`, {
    headers: {
      Authorization: `Basic ${credentials}`
    }
  });
  return await res.json();
}

export async function fetchRateById(id) {

  const res = await fetch(`${baseUrl}/rates/${id}`, {
    headers: {
      Authorization: `Basic ${credentials}`
    }
  });
  return await res.json();
}

export async function fetchAccommodationTypeById(id) {
  const res = await fetch(`${baseUrl}/accommodation_types/${id}`, {
    headers: {
      Authorization: `Basic ${credentials}`
    }
  });
  return await res.json();
}

export async function fetchReviews(accommodationTypeId = null) {
  const url = accommodationTypeId
    ? `/api/reviews?id=${accommodationTypeId}`
    : `/api/reviews`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${credentials}`
    },
  });
  return await res.json();
}

export async function postReview(reviewData) {
  const res = await fetch(`/api/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${credentials}`
    },
    body: JSON.stringify(reviewData)
  });
  return await res.json();
}

export async function checkAvailability(availabilityData) {
  const { accommodation_type, adults, check_in_date, check_out_date, children } = availabilityData
  const res = await fetch(`${baseUrl}/bookings/availability?check_in_date=${check_in_date}&check_out_date=${check_out_date}&accommodation_type=${accommodation_type}&adults=${adults}&children=${children}`, {
    headers: {
      Authorization: `Basic ${credentials}`
    }
  });
  return await res.json();
}

export async function fetchAccommodationServices(accommodationTypeId) {
  const res = await fetch(`${baseUrl}/accommodation_types/services`, {
    headers: {
      Authorization: `Basic ${credentials}`
    }
  });
  return await res.json();
}

export async function createBooking(bookingData) {
  const res = await fetch(`${baseUrl}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${credentials}`
    },
    body: JSON.stringify(bookingData)
  });

  const saveToStorage = await res.json()
  if (res.ok) localStorage.setItem("bookingId", saveToStorage.id);
  return saveToStorage;
}

export async function fetchBooking(bookingId) {
  const res = await fetch(`${baseUrl}/bookings/${bookingId}`, {
    headers: {
      Authorization: `Basic ${credentials}`
    }
  });
  return await res.json();
}

export async function payWithFlutterwave(bookingInfo) {

  const res = await fetch('/api/flutterwave/initialize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingInfo),
  });
  return await res.json();
}

export async function payWithPaystack(bookingInfo) {
  const res = await fetch('/api/paystack/initialize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingInfo),
  });
  return await res.json();
}

export async function confirmBookingViaBridge(bookingId, gateway, txRef) {
  const res = await fetch(`https://viveeaura.org/wp-json/mphb-bridge/v1/confirm-booking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${credentials}`
    },
    body: JSON.stringify({ booking_id: bookingId, gateway, tx_ref: txRef })
  });
  return await res.json();
}
