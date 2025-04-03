// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  // State to store data fetched from the API
  const [apiData, setApiData] = useState(null);

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
          our strata-titled apartment building.
        </p>
      </header>
      {/* No duplicate navigation here—navigation is rendered via layout.tsx */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>System Overview</h2>
        <p>
          Use the navigation above to explore different features of our system...
        </p>
      </section>
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
