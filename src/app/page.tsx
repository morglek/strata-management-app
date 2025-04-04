"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      {/* Header with Logo */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="Logo" width={80} height={80} className={styles.logo} />
        </div>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Welcome to the Strata Management System</h1>
          <p className={styles.subtitle}>
            Manage your strata-titled apartment building with efficiency and style.
          </p>
        </div>
      </header>

      {/* Navigation Links */}
      <section className={styles.navSection}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/notifications" className={styles.navLink}>Notifications</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/committee" className={styles.navLink}>Committee Info</Link>
          <Link href="/strata-requests" className={styles.navLink}>Strata Requests</Link>
          <a href="/info.html" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
            Info (HTML)
          </a>
        </nav>
      </section>

      {/* System Overview */}
      <section className={styles.overviewSection}>
        <h2 className={styles.sectionTitle}>System Overview</h2>
        <p className={styles.sectionText}>
          Use the navigation above to explore features such as notifications, FAQs, committee details, and the strata request submission form.
        </p>
      </section>

      {/* API Data Demonstration */}
      <section className={styles.apiSection}>
        <h2 className={styles.sectionTitle}>API Data Demonstration</h2>
        {apiData ? (
          <div className={styles.apiCard}>
            <pre className={styles.apiText}>
              {JSON.stringify(apiData, null, 2)}
            </pre>
          </div>
        ) : (
          <p className={styles.sectionText}>Loading API data...</p>
        )}
      </section>
    </div>
  );
}
