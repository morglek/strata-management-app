// scripts.js - Optional: global JS with conditional behavior

document.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.pathname;
  console.log("Current path:", currentPath);

  if (currentPath === "/index.html") {
    console.log("Home page loaded");
  } else if (currentPath === "/notifications.html") {
    console.log("Notifications page loaded");
  } else if (currentPath === "/faq.html") {
    console.log("FAQ page loaded");
  } else if (currentPath === "/committee.html") {
    console.log("Committee Info page loaded");
  } else if (currentPath === "/contact.html") {
    console.log("Contact page loaded");
  }
});
