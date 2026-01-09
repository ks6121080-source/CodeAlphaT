// ================================
// DATE FORMAT HELPER (ADD THIS AT TOP)
// ================================
function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// ================================
// ADMIN DASHBOARD SCRIPT
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const adminBookings = document.getElementById("adminBookings");
  if (!adminBookings) return; // run only on admin.html

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  let activeCount = 0;
  let expiredCount = 0;

  adminBookings.innerHTML = ""; // clear old rows

  bookings.forEach((booking) => {
    const row = document.createElement("div");
    row.classList.add("table-row");

    if (booking.status === "Active") activeCount++;
    if (booking.status === "Expired") expiredCount++;

    row.innerHTML = `
      <div>${booking.user}</div>
      <div>${booking.from}</div>
      <div>${booking.to}</div>
      <div>${booking.passType}</div>
      <div>${formatDate(booking.validTill)}</div>
      <div class="status ${booking.status.toLowerCase()}">
        ${booking.status}
      </div>
    `;

    adminBookings.appendChild(row);
  });

  // STATS
  document.getElementById("totalUsers").textContent = bookings.length;
  document.getElementById("activePasses").textContent = activeCount;
  document.getElementById("expiredPasses").textContent = expiredCount;
});
