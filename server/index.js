import express from 'express'
import cors from 'cors'

import './loadEnvVars.js'

import invoices from './routes/index.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', invoices)

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
