"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/requests")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.error("Error fetching API data:", err));
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header>
        <h1 className={styles.header}>
          Welcome to the Strata Management System
        </h1>
        <p className={styles.subheader}>
          Manage your strata-titled apartment building efficiently with our comprehensive platform.
        </p>
      </header>

      {/* System Overview */}
      <section className={styles.overview}>
        <h2>System Overview</h2>
        <p>
          Use the navigation above to explore features such as notifications, FAQs, committee details, and the strata request submission form.
        </p>
      </section>

      {/* API Data Demonstration */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">API Data Demonstration</h2>
        {apiData ? (
          <div className={styles.apiBox}>
            {JSON.stringify(apiData, null, 2)}
          </div>
        ) : (
          <p>Loading API data...</p>
        )}
      </section>
    </div>
  );
}
