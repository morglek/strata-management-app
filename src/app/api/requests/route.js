// src/app/api/requests/route.js

export async function GET(request) {
  // Simulated GET response data for fetching requests
  const responseData = {
    message: "GET request successful",
    requests: [] // This can be replaced with actual data if needed
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  // Parse the JSON body from the POST request
  const body = await request.json();

  // Process the form data as needed (this example just echoes it back)
  const responseData = {
    message: "POST request successful",
    data: body,
  };

  return new Response(JSON.stringify(responseData), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
