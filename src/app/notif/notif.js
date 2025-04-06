// src/app/api/getNotifications/route.js

import { getNotificationsForLocation } from "@/lib/notifications"; // adjust path

export async function GET(request) {
  // Vercel injects the x-vercel-location header at the edge
  const location = request.headers.get("x-vercel-location") || "unknown";

  const notifications = await getNotificationsForLocation(location);

  return new Response(JSON.stringify(notifications), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
