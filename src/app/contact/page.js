"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await res.json();
      if (result.success) {
        // Redirect to the home page (index)
        router.push("/");
      } else {
        alert("Submission error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Error submitting contact form: " + error.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:<br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Message:<br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
