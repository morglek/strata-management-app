// src/app/api/requests/route.js

// Temporary in-memory storage for demonstration purposes.
// Note: This data is not persisted between server restarts or deployments.
let requests = [];

export async function GET(request) {
  return new Response(
    JSON.stringify({
      message: "GET request successful",
      requests, // Returns the currently stored requests
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function POST(request) {
  try {
    const body = await request.json();
    // Append the new request data to our in-memory storage.
    requests.push(body);
    return new Response(
      JSON.stringify({
        message: "POST request successful",
        data: body,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error processing request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

