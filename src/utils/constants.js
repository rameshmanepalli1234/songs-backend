import dotenv from "dotenv"
import { handleEnv } from "./handleEnv.js"

//? Load Environment variables
dotenv.config(handleEnv())

//? Get PORT
export const EXPRESS_PORT = process.env.EXPRESS_PORT

//? Get Mongodb Connection string
export const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL

//? DB Config
export const db_config = {
	DB_NAME: "songs_db",
	MAX_POOL_SIZE: 100,
    SONGS: "songs"
}