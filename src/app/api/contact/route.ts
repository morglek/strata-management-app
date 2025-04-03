// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// A temporary in-memory store for contact submissions
let contactSubmissions: any[] = [];

// Handle GET requests: returns all contact submissions
export async function GET(request: NextRequest) {
  return NextResponse.json({ submissions: contactSubmissions }, { status: 200 });
}

// Handle POST requests: receives and stores a new contact submission
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Add the new submission to the in-memory store
    contactSubmissions.push(body);
    return NextResponse.json({ message: 'Contact submission received', data: body }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error processing contact submission', error: error.message }, { status: 500 });
  }
}
