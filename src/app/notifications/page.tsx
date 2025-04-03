// src/app/notifications/page.tsx
import React from "react";

export default function Notifications() {
  // Dummy notifications data
  const notifications = [
    {
      id: 1,
      title: "Maintenance Update",
      message: "Scheduled maintenance will occur on April 15th. Please plan accordingly.",
      date: "2025-04-12",
    },
    {
      id: 2,
      title: "Committee Meeting",
      message: "Our next committee meeting is scheduled for April 20th. Attendance is encouraged.",
      date: "2025-04-10",
    },
    {
      id: 3,
      title: "New Policy Announcement",
      message: "A new parking policy has been introduced. Check your email for more details.",
      date: "2025-04-08",
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Notifications</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            style={{
              marginBottom: "1.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "1rem",
            }}
          >
            <h2 style={{ margin: "0 0 0.5rem 0" }}>{notification.title}</h2>
            <p style={{ margin: "0 0 0.5rem 0" }}>{notification.message}</p>
            <small style={{ color: "#555" }}>{notification.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
