import express from "express"
import cors from "cors"
import { EXPRESS_PORT } from "./src/utils/constants.js"
import { songsRouter } from "./src/routes/SongRouter.js"
import { connection } from "./src/db/SongsDb.js"


//? Mongodb Connected successfully
connection.on("connected", () => {
	console.log("MongoDB connected successfully")
})

//! Mongodb Connection error
connection.on("error", () => {
	console.log("MongoDB connection error")
})


//TODO: Initialize Express app
const app = express()

// TODO: Set API port
const PORT = process.env.PORT || EXPRESS_PORT

//TODO: Configure CORS (middleware)
app.use(cors())

//TODO: Configure body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//? API routes
app.use("/api/songs", songsRouter)

//TODO: Listen from API Server port
app.listen(PORT, () => {
	console.log(
		`Songs-App: Server running successfully on http://localhost:${PORT}`
	)
})
