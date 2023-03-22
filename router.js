import express from "express"
import {
	getAllSongs,
	getSongById,
	addSong,
	updateSongById,
	deleteSongById,
	deleteAllSongs
} from "./controllers.js"

const songsRouter = express.Router()

songsRouter.get("/all", getAllSongs)
songsRouter.get("/:id", getSongById)
songsRouter.post("/add", addSong)
songsRouter.put("/update/:id", updateSongById)
songsRouter.delete("/delete/:id", deleteSongById)
songsRouter.delete("/delete", deleteAllSongs)

export { songsRouter }
