// src/app/api/contact/route.js

// For demonstration, we use an in-memory array to store submissions.
// In a production environment, you should use a database.
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
    console.log("Received POST data:", { name, email, message, timestamp });
    
    // Instead of returning JSON, redirect to the home page (or index.html)
    return new Response(null, {
      status: 302,
      headers: { "Location": "/index.html" }
    });
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
    const { search } = new URL(req.url).searchParams;
    console.log("Received GET search query:", search);
    // Return the stored posts along with any search query info.
    return new Response(
      JSON.stringify({ success: true, posts, query: search || "No search query provided" }),
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

