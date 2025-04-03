"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [submissions, setSubmissions] = useState([]);

  // Fetch submissions from the contact API on component mount
  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        // Our API returns data in the format { submissions: [...] }
        if (data.submissions) {
          setSubmissions(data.submissions);
        }
      } catch (error) {
        console.error("Error fetching contact submissions:", error);
      }
    }
    fetchSubmissions();
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
          <h2>Recent Contact Form Submissions</h2>
          {submissions.length === 0 ? (
            <p>No submissions yet.</p>
          ) : (
            <ul>
              {submissions.map((submission, index) => (
                <li key={index}>
                  <strong>{submission.name}</strong> ({submission.email}) said:{" "}
                  {submission.message}{" "}
                  <em>
                    at {new Date(submission.timestamp).toLocaleString()}
                  </em>
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

