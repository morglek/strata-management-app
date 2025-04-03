import { NextResponse } from 'next/server';

interface ContactRequest {
  unit: string;
  issue: string;
  date: string;
}

let contactRequests: ContactRequest[] = [];

export async function POST(request: Request) {
  try {
    const { unit, issue } = await request.json();
    
    // Check if required fields are present
    if (!unit || !issue) {
      return NextResponse.json(
        { error: 'Missing required fields: unit and issue are required.' },
        { status: 400 }
      );
    }

    const newRequest: ContactRequest = {
      unit,
      issue,
      date: new Date().toISOString(),
    };

    contactRequests.push(newRequest);
    
    return NextResponse.json(newRequest, { status: 201 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  return NextResponse.json(contactRequests);
}
