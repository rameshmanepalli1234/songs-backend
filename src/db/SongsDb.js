import mongoose from "mongoose"
import { db_config, MONGO_CONNECTION_URL } from "../utils/constants.js"

mongoose.set("strictQuery", true)
mongoose.connect(MONGO_CONNECTION_URL, { maxPoolSize: db_config.MAX_POOL_SIZE })

const connection = mongoose.connection
const songsDB = connection.useDb(db_config.DB_NAME)

export { connection, songsDB }