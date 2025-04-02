// src/app/api/contact/route.js

// For demonstration purposes, we'll use an in-memory array.
// Note: In a production app, use a database for persistence.
let posts = [];

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data;
    if (contentType.includes("application/json")) {
      data = await req.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      data = Object.fromEntries(formData.entries());
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "Unsupported content type" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    
    const { name, email, message } = data;
    const timestamp = new Date().toISOString();
    posts.push({ name, email, message, timestamp });
    console.log("Received contact form data:", { name, email, message, timestamp });
    
    return new Response(
      JSON.stringify({ success: true, message: "Message received!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in POST /api/contact:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error: " + error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET(req) {
  try {
    return new Response(
      JSON.stringify({ success: true, posts }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in GET /api/contact:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error: " + error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
