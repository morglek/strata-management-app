// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getContactRequests, addContactRequest } from "../contact";

// Handle GET requests: returns all contact requests.
export async function GET(request: NextRequest) {
  const contactRequests = getContactRequests();
  return NextResponse.json(contactRequests, { status: 200 });
}

// Handle POST requests: adds a new contact request.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newRequest = addContactRequest(body);
    return NextResponse.json(
      { message: "Contact request received", data: newRequest },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error processing contact request", error: error.message },
      { status: 500 }
    );
  }
}

