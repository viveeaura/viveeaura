const credentials = btoa(`${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_PASSWORD}`);
const baseUrl = 'https://viveeaura.org/wp-json/mphb/v1';

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
    ? `/api/reviews/${accommodationTypeId}`
    : `/api/reviews`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${credentials}`
    }
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
