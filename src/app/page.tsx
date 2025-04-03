"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/requests")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.error("Error fetching API data:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to the Strata Management System
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Manage your strata-titled apartment building efficiently with our comprehensive platform.
        </p>
      </header>

      {/* System Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">System Overview</h2>
        <p className="text-gray-800">
          Use the navigation above to explore features such as notifications, FAQs, committee details, and the strata request submission form.
        </p>
      </section>

      {/* API Data Demonstration */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">API Data Demonstration</h2>
        {apiData ? (
          <div className="bg-gray-100 p-4 rounded shadow">
            <pre className="text-gray-800 text-sm whitespace-pre-wrap">
              {JSON.stringify(apiData, null, 2)}
            </pre>
          </div>
        ) : (
          <p className="text-gray-600">Loading API data...</p>
        )}
      </section>
    </div>
  );
}
