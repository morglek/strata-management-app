// src/app/faq/page.tsx
import React from "react";

export default function FAQ() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Frequently Asked Questions</h1>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2>Q: What is Strata Management?</h2>
        <p>
          A: Strata Management involves overseeing and maintaining shared property,
          including common areas and facilities, while ensuring smooth community operations.
        </p>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2>Q: How do I submit a request?</h2>
        <p>
          A: You can submit your requests through our Strata Requests page by filling out the provided form.
        </p>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2>Q: Who is responsible for managing the building?</h2>
        <p>
          A: A Strata Committee, which includes a Chairperson, Treasurer, Secretary, and additional members,
          is responsible for managing the building.
        </p>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2>Q: What should I do if I have an emergency maintenance issue?</h2>
        <p>
          A: In case of an emergency, please contact the building manager immediately. For non-urgent issues, submit a request through the website.
        </p>
      </div>
      <div>
        <h2>Q: Where can I find more information about the committee?</h2>
        <p>
          A: More detailed information about the committee roles and responsibilities is available on the Committee Information page.
        </p>
      </div>
    </div>
  );
}
