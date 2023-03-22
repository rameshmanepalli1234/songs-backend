import { isValidSchema } from "../utils/validateSchema.js"
import { SongQuery } from '../query/SongQuery.js'

const getAllSongs = async(req, res) => {
	const allSongsResponse = await SongQuery.getMany({})
	return res.status(200).json(allSongsResponse)
}

const getSongById = async(req, res) => {
	//? Grab the song id
	const songId = req.params.id

	//? Get song by Id
	const getSongByIdResponse = await SongQuery.getOne({ _id: songId })

	if(getSongByIdResponse.status === 200){
		return res.status(200).json(getSongByIdResponse)
	}

	return res.status(404).json(getSongByIdResponse)
}

const addSong = async(req, res) => {
	//? Grab song from request body
	const songBody = req.body

	//? Validate Song
	if(!isValidSchema(songBody))
		return res.status(400).json({
			status: 'Bad Request',
			message: 'Invalid Fields'
		})
	
	//? Add song
	const addedSongResponse = await SongQuery.addOne(songBody)
	return res.status(addedSongResponse.status).json(addedSongResponse)
}

const updateSongById = async(req, res) => {
	//? Grab the song id
	const songId = req.params.id

	//? Grab song from request body
	const songBody = req.body

	//? Validate Song
	if(!isValidSchema(songBody))
		return res.status(400).json({
			status: 'Bad Request',
			message: 'Invalid Fields'
		})
	
	//? Update song
	const updateSongResponse = await SongQuery.updateOne({ _id: songId },songBody)
	return res.status(updateSongResponse.status).json(updateSongResponse)
}

const deleteSongById = async(req, res) => {
	//? Grab the song id
	const songId = req.params.id

	//? Delete song by id
	const deletedSongResponse = await SongQuery.deleteOne({ _id: songId })
	return res.status(deletedSongResponse.status).json(deletedSongResponse)
}

const deleteAllSongs = async(req, res) => {
	//? Delete all songs
	const deletedAllSongResponse = await SongQuery.deleteMany()
	return res.status(deletedAllSongResponse.status).json(deletedAllSongResponse)
}

export {
	getAllSongs,
	getSongById,
	addSong,
	updateSongById,
	deleteSongById,
	deleteAllSongs
}
