// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getContactSubmissions, addContactSubmission } from "../contact";

// Handle GET requests: returns all contact submissions.
export async function GET(request: NextRequest) {
  const submissions = getContactSubmissions();
  return NextResponse.json({ submissions }, { status: 200 });
}

// Handle POST requests: adds a new contact submission.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newSubmission = addContactSubmission(body);
    return NextResponse.json(
      { message: "Contact submission received", data: newSubmission },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error processing contact submission", error: error.message },
      { status: 500 }
    );
  }
}
