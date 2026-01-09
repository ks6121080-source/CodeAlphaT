require("dotenv").config();
const express = require("express");
const admin = require("firebase-admin");

const app = express();
app.use(express.json());

// Load service account key
admin.initializeApp({
  credential: admin.credential.cert(require("./service-account.json")),
});

const db = admin.firestore();

// API route for duplicate check
app.post("/check-duplicate", async (req, res) => {
  const { collection, field, value } = req.body;

  if (!collection || !field || !value) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const snapshot = await db
      .collection(collection)
      .where(field, "==", value)
      .get();

    if (!snapshot.empty) {
      return res.json({ duplicate: true });
    } else {
      return res.json({ duplicate: false });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Render gives port through env
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log("Backend running on port", port);
});
