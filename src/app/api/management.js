document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const unit = document.getElementById("unit").value;
    const requesttext = document.getElementById("requesttext").value;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unit, requesttext })
      });
      if (res.ok) {
        const data = await res.json();
        resultDiv.textContent = "Request submitted: " + JSON.stringify(data);
        form.reset();
      } else {
        const errorData = await res.json();
        resultDiv.textContent = "Error: " + errorData.error;
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      resultDiv.textContent = "Error submitting request.";
    }
  });
});
