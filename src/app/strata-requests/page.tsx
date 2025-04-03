"use client";
// src/app/strata-requests/page.tsx
import { useState, FormEvent, ChangeEvent } from "react";

export default function StrataRequests() {
  // State to store form data
  const [formData, setFormData] = useState({ name: "", request: "" });
  // State for response messages from the API
  const [responseMsg, setResponseMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Update state as user types into the form fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission and send data via POST request
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    setResponseMsg("");
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        setErrorMsg("Failed to submit your request. Please try again.");
      } else {
        const data = await res.json();
        setResponseMsg(data.message);
        // Optionally reset the form after successful submission
        setFormData({ name: "", request: "" });
      }
    } catch (error) {
      setErrorMsg("An error occurred while submitting your request.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>Submit a Strata Request</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="request" style={{ display: "block", marginBottom: "0.5rem" }}>
            Your Request:
          </label>
          <textarea
            id="request"
            name="request"
            value={formData.request}
            onChange={handleChange}
            required
            rows={4}
            style={{ width: "100%", padding: "0.5rem" }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Submit Request
        </button>
      </form>
      {responseMsg && <p style={{ color: "green", marginTop: "1rem" }}>{responseMsg}</p>}
      {errorMsg && <p style={{ color: "red", marginTop: "1rem" }}>{errorMsg}</p>}
    </div>
  );
}
