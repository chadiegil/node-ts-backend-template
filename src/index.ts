import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import { UserToken } from "./types/user-token-type"

import homeRoute from "./routes/home-route"
import postRoute from "./routes/post/post-route"

dotenv.config()

const app = express()

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONT_END_URL,
  })
)

app.use(bodyParser.json())
app.use(cookieParser())

declare global {
  namespace Express {
    interface Request {
      user: UserToken
    }
  }
}

const PORT = process.env.PORT ?? 5000

// routes

app.use("/", homeRoute)

app.use("/post", postRoute)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
