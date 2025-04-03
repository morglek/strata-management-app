"use client";

// src/app/page.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // State to store data fetched from the API
  const [apiData, setApiData] = useState(null);

  // useEffect hook to fetch data from our API endpoint on page load
  useEffect(() => {
    fetch("/api/requests")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.error("Error fetching API data:", err));
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>Welcome to the Strata Management System</h1>
        <p>
          This platform provides essential information and functionality for managing
          our strata-titled apartment building. Explore different sections for notifications,
          FAQs, committee details, and to submit your strata requests.
        </p>
      </header>

      {/* Navigation Links to different pages */}
      <nav style={{ marginBottom: "2rem" }}>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notifications">Notifications</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/committee">Committee Info</Link>
          </li>
          <li>
            <Link href="/strata-requests">Strata Requests</Link>
          </li>
          <li>
            <a href="/info.html" target="_blank" rel="noopener noreferrer">
              Info (HTML)
            </a>
          </li>
        </ul>
      </nav>

      {/* System Overview Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>System Overview</h2>
        <p>
          Use the navigation above to explore different features of our system. Whether you
          need to review notifications, check the FAQs, learn more about the committee, or
          submit a request, everything is just a click away.
        </p>
      </section>

      {/* API Data Demonstration Section */}
      <section>
        <h2>API Data Demonstration</h2>
        {apiData ? (
          <pre style={{ background: "#f0f0f0", padding: "1rem" }}>
            {JSON.stringify(apiData, null, 2)}
          </pre>
        ) : (
          <p>Loading API data...</p>
        )}
      </section>
    </div>
  );
}
