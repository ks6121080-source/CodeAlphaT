const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ================================
// TEMP STORAGE (NO DATABASE)
// ================================
let bookings = [];

// ================================
// TEST ROUTE
// ================================
app.get("/", (req, res) => {
  res.send("Bus Pass Backend Running");
});

// ================================
// SAVE NEW BOOKING
// ================================
app.post("/api/bookings", (req, res) => {
  const booking = req.body;

  const newBooking = {
    id: Date.now(),
    user: booking.user,
    from: booking.from,
    to: booking.to,
    passType: booking.passType,
    validTill: booking.validTill,
    status: "Active"
  };

  bookings.push(newBooking);

  res.status(201).json({
    message: "Booking saved successfully",
    booking: newBooking
  });
});

// ================================
// GET ALL BOOKINGS (ADMIN)
// ================================
app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});

// ================================
// START SERVER
// ================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
