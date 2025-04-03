"use client"; // Required for client-side interactivity

import { useState } from "react";
import Link from "next/link";

export default function ManagementPage() {
  const [unit, setUnit] = useState("");
  const [requestText, setRequestText] = useState("");
  const [result, setResult] = useState("");

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unit, requesttext: requestText }),
      });
      if (res.ok) {
        const data = await res.json();
        setResult("Request submitted: " + JSON.stringify(data));
        setUnit("");
        setRequestText("");
      } else {
        const errorData = await res.json();
        setResult("Error: " + errorData.error);
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      setResult("Error submitting request.");
    }
  };

  return (
    <div>
      <header>
        <h1>Submit a New Contact Request</h1>
        <nav>
          <ul>
            <li><Link href="/index">Home</Link></li>
            <li><Link href="/notifications">Notifications</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/committee">Committee Info</Link></li>
            <li><Link href="/management">Management</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="unit">Unit:</label><br />
            <input
              type="text"
              id="unit"
              name="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="requesttext">Request:</label><br />
            <textarea
              id="requesttext"
              name="requesttext"
              value={requestText}
              onChange={(e) => setRequestText(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit Request</button>
        </form>
        {result && <div id="result">{result}</div>}
      </main>

      <footer>
        <p>&copy; 2025 Strata Management. All rights reserved.</p>
      </footer>
    </div>
  );
}

