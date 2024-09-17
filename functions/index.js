import express from "express";
import functions from "firebase-functions";
import cors from "cors";
import {
  getAllMeds,
  getMedById,
  getMedByName,
  addMed,
  updateMed,
  deleteMed,
} from "./medications";
import { getAllVax, addVax } from "./vaccinations";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/medications", getAllMeds);
app.get("/medications/:medicationId", getMedById);
app.get("/medications/:medicationName", getMedByName);
app.post("/medications", addMed);
app.patch("/medications/:medicationId", updateMed);
app.delete("/medications/:medicationId", deleteMed);

app.get("/vaccinations", getAllVax);
app.post("/vaccinations", addVax);

export const api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
