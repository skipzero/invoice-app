import express from 'express';
import cors from 'cors';


const PORT = process.env.PORT || 5150;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})