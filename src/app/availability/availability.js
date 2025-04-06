// src/app/api/checkFacilityAvailability/route.js

import {
  checkFacilityAvailability,
  bookFacility,
} from "@/lib/facility";  // adjust path

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const facility = searchParams.get("facility");
  const timeSlot = searchParams.get("timeSlot");

  if (!facility || !timeSlot) {
    return new Response(
      JSON.stringify({ error: "Missing facility or timeSlot parameter" }),
      { status: 400 }
    );
  }

  const isAvailable = await checkFacilityAvailability(facility, timeSlot);

  if (isAvailable) {
    await bookFacility(facility, timeSlot);
    return new Response(
      JSON.stringify({ message: "Booking successful" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } else {
    return new Response(
      JSON.stringify({ message: "Time slot unavailable" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
