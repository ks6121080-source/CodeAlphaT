// ================================
// DATE FORMAT HELPER (ADD THIS AT TOP)
// ================================
function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
}

// ================================
// LOGIN PAGE
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }
});

// ================================
// DASHBOARD → BOOK PASS
// ================================
function goToBookPass() {
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;

  localStorage.setItem("from", from);
  localStorage.setItem("to", to);

  window.location.href = "book-pass.html";
}

// ================================
// BOOK PASS → CONFIRMED (FIXED)
// ================================
function saveBooking() {
  const user =
    document.querySelector("#username")?.value || "Guest User";
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;
  const passType = document.querySelector("#pass-type").value;
  const validTill = document.querySelector("#valid-till").value;

  // Get existing bookings
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  // Decide status automatically
  const today = new Date();
  const expiryDate = new Date(validTill);
  const status = expiryDate < today ? "Expired" : "Active";

  const newBooking = {
    user,
    from,
    to,
    passType,
    validTill,
    status
  };

  // Save booking
  bookings.push(newBooking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  // Save last booking (for confirmed & my-pass)
  localStorage.setItem("lastBooking", JSON.stringify(newBooking));

  window.location.href = "confirmed.html";
}

// ================================
// PREFILL BOOK-PASS FROM DASHBOARD
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const fromSelect = document.querySelector("#from");
  const toSelect = document.querySelector("#to");

  if (fromSelect && localStorage.getItem("from")) {
    fromSelect.value = localStorage.getItem("from");
  }

  if (toSelect && localStorage.getItem("to")) {
    toSelect.value = localStorage.getItem("to");
  }
});

// ================================
// CONFIRMED PAGE DATA (FIXED)
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const fromConfirm = document.getElementById("from-confirm");
  if (!fromConfirm) return; // run only on confirmed.html

  const booking = JSON.parse(localStorage.getItem("lastBooking"));
  if (!booking) return;

  document.getElementById("from-confirm").textContent = booking.from;
  document.getElementById("to-confirm").textContent = booking.to;
  document.getElementById("pass-type-confirm").textContent = booking.passType;
  document.getElementById("valid-till-confirm").textContent =
    formatDate(booking.validTill);
});

// ================================
// MY PASS PAGE DATA (FIXED)
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const fromPass = document.getElementById("from-pass");
  if (!fromPass) return; // run only on my-pass.html

  const booking = JSON.parse(localStorage.getItem("lastBooking"));
  if (!booking) return;

  document.getElementById("from-pass").textContent = booking.from;
  document.getElementById("to-pass").textContent = booking.to;
  document.getElementById("pass-type-pass").textContent = booking.passType;
  document.getElementById("valid-till-pass").textContent =
    formatDate(booking.validTill);
});
