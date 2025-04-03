// src/app/committee/page.tsx
import React from "react";

export default function Committee() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Strata Committee Information</h1>
      <p>
        The Strata Committee is responsible for the effective management and administration of our strata-titled apartment building. Elected representatives work together to ensure proper maintenance of common areas, manage the administration and capital works funds, and oversee the overall governance of the building.
      </p>
      <h2>Committee Roles and Responsibilities</h2>
      <ul>
        <li>
          <strong>Chairperson:</strong> Oversees meetings, sets agendas, and coordinates committee activities.
        </li>
        <li>
          <strong>Treasurer:</strong> Manages financial records, oversees the funds, and handles budgeting.
        </li>
        <li>
          <strong>Secretary:</strong> Maintains meeting minutes, handles documentation, and manages communication.
        </li>
        <li>
          <strong>Other Members:</strong> Support various functions including maintenance coordination, compliance, and resident communication.
        </li>
      </ul>
      <h2>Meeting Schedule</h2>
      <p>
        Regular meetings are held to review financials, discuss maintenance projects, and address any issues raised by residents. Participation from all committee members is encouraged to ensure transparent and effective decision-making.
      </p>
      <h2>Contact and Further Information</h2>
      <p>
        For further details or to contact the committee, please visit the Strata Requests page where you can submit queries or requests. Your input helps us improve the living experience for everyone in the building.
      </p>
    </div>
  );
}
