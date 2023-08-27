import express from 'express';
import cors from 'cors';
import { config } from "dotenv"

config();

const PORT = 3000 //process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/invoices', invoices);

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
