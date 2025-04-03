"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [contactRequests, setContactRequests] = useState([]);
  const [formValues, setFormValues] = useState({ unit: "", requesttext: "" });
  const [result, setResult] = useState("");

  // Fetch contact requests from the API endpoint
  const fetchContactRequests = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      setContactRequests(data);
    } catch (error) {
      console.error("Error fetching contact requests:", error);
    }
  };

  useEffect(() => {
    fetchContactRequests();
  }, []);

  // Handle form submission to post a new contact request
  const submitContactRequest = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      if (res.ok) {
        const data = await res.json();
        setResult("Request submitted successfully.");
        // Clear the form fields
        setFormValues({ unit: "", requesttext: "" });
        // Refresh the contact requests list
        fetchContactRequests();
      } else {
        const errorData = await res.json();
        setResult("Error: " + errorData.error);
      }
    } catch (error) {
      console.error("Error submitting contact request:", error);
      setResult("Error submitting contact request.");
    }
  };

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
              {/* This link can be updated if you have a separate management page */}
              <Link href="/management.html">Management</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Form for submitting a new contact request */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>Submit a New Contact Request</h2>
          <form onSubmit={submitContactRequest}>
            <div>
              <label htmlFor="unit">Unit:</label>
              <input
                type="text"
                id="unit"
                name="unit"
                value={formValues.unit}
                onChange={(e) =>
                  setFormValues({ ...formValues, unit: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="requesttext">Request:</label>
              <textarea
                id="requesttext"
                name="requesttext"
                value={formValues.requesttext}
                onChange={(e) =>
                  setFormValues({ ...formValues, requesttext: e.target.value })
                }
                required
              ></textarea>
            </div>
            <button type="submit">Submit Request</button>
          </form>
          {result && <p>{result}</p>}
        </section>

        {/* Section for displaying recent contact requests */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>Recent Contact Requests</h2>
          {contactRequests.length === 0 ? (
            <p>No contact requests yet.</p>
          ) : (
            <ul>
              {contactRequests.map((req, index) => (
                <li key={index}>
                  <strong>{req.unit}</strong> reported: {req.requesttext} on {req.date}
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


