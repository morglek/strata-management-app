import { NextResponse } from "next/server";

interface ContactRequest {
  unit: string;
  requesttext: string;
  date: string;
}

// In-memory storage for contact requests
let contactRequests: ContactRequest[] = [];

// POST handler: receives JSON data, validates it, creates a new request, and adds it to the array.
export async function POST(request: Request) {
  try {
    const { unit, requesttext } = await request.json();
    
    if (!unit || !requesttext) {
      return NextResponse.json(
        { error: "Missing required fields: unit and requesttext" },
        { status: 400 }
      );
    }
    
    const newRequest: ContactRequest = {
      unit,
      requesttext,
      date: new Date().toISOString(),
    };
    
    contactRequests.push(newRequest);
    
    return NextResponse.json(newRequest, { status: 201 });
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// GET handler: returns all stored contact requests as JSON.
export async function GET(request: Request) {
  return NextResponse.json(contactRequests);
}
