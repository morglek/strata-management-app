"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [contactRequests, setContactRequests] = useState([]);

  // Fetch contact requests from the API endpoint on component mount.
  useEffect(() => {
    async function fetchContactRequests() {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        // Now data is directly the array of contact requests.
        if (data) {
          setContactRequests(data);
        }
      } catch (error) {
        console.error("Error fetching contact requests:", error);
      }
    }
    fetchContactRequests();
  }, []);

  return (
    <div className="container" style={{ padding: "1rem" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Image
          src="/logo.png"
          alt="Strata Management Logo"
          width={180}
          height={38}
          priority
        />
        <h1>Welcome to Strata Management Services</h1>
        <nav>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <li>
              <Link href="/index">Home</Link>
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
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Recent Contact Requests</h2>
          {contactRequests.length === 0 ? (
            <p>No contact requests yet.</p>
          ) : (
            <ul>
              {contactRequests.map((request, index) => (
                <li key={index}>
                  <strong>{request.unit}</strong> reported: {request.issue} on {request.date}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "#2d3e50",
          color: "#fff",
        }}
      >
        <p>&copy; 2025 Strata Management. All rights reserved.</p>
      </footer>
    </div>
  );
}

