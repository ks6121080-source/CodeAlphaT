import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import { readFileSync } from "fs";

// Firebase service account
const serviceAccount = JSON.parse(
  readFileSync("./serviceAccountKey.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(express.json());

// Duplicate-check API
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
      res.json({ duplicate: true, message: "Duplicate record found!" });
    } else {
      res.json({ duplicate: false, message: "No duplicate found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(10000, () => console.log("Server running on port 10000"));
