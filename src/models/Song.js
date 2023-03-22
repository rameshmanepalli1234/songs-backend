import mongoose from "mongoose"
import { songsDB } from "../db/SongsDb.js" 
import { db_config } from "../utils/constants.js"

const { Schema } = mongoose

const songSchema = new Schema({
    firstLetter:{ type: String },
	title: { type: String },
	lyric: { type: String },
	englishTitle: { type: String }
})

const SongModel = songsDB.model(db_config.SONGS, songSchema)
export { SongModel }