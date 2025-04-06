// src/app/api/getStrataFee/route.js

import { getUserUnit } from "@/lib/user";               // adjust path
import { calculateStrataFee } from "@/lib/strata";      // adjust path

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (!userId) {
    return new Response(
      JSON.stringify({ error: "Missing userId parameter" }),
      { status: 400 }
    );
  }

  // Retrieve the unit for this user, then compute the fee
  const userUnit = await getUserUnit(userId);
  const strataFee = await calculateStrataFee(userUnit);

  return new Response(JSON.stringify({ strataFee }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
