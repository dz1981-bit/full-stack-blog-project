import { app } from './app.js'
import dotenv from 'dotenv'
import { initDatabase } from './db/init.js'
dotenv.config()

await initDatabase()

const PORT = process.env.PORT
app.listen(PORT)
console.info(`express server running on http://localhost:${PORT}`)
