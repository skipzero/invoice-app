import express from "express";
import cors from "cors";

import "./loadEnvVars.js";
import "express-async-errors";

import invoices from "./routes/invoices.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// global error handling
app.use((err, _req, res, next) => {
  res.status(500).send(`we have a problem \n ${err}`);
});

app.use("/api", invoices);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
