import express from 'express';
import cors from 'cors';
import { config} from ("dotenv")
import { executeInvoiceOperations } from './invoiceCrus.js';

config();
console.log('PROCESS!!!', process.env)

await executeInvoiceOperations();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
