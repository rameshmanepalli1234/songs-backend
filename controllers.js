import { songs_db } from "./data.js"

const getAllSongs = async(req, res) => {
	//? Get all songs from database
	const allSongs = songs_db

	res.status(200).json({
		status: "OK",
		message: `Found ${allSongs.length} songs`,
		data: allSongs
	})
}

const getSongById = async(req, res) => {
	//? Grab the songId from request params
	const songId = req.params.id

	//? Find song by id
	const foundedSong = songs_db.filter((song) => song.id === songId )
	console.log("Found song: ", foundedSong)


	if(foundedSong.length){
		return res.status(200).json({
			status: "OK",
			message: `Song found for id: ${songId}`,
			data: foundedSong[0]
		})
	}

	return res.status(404).json({
		status: "Not Found",
		message: `Song not found`
	})
}

const addSong = async(req, res) => {
	//? Grab song from request body
	const songBody = req.body
	console.log(songBody)

	//? Validate Song	

	//? Add the song to the database
	songs_db.push(songBody)

	return res.status(200).json({
		status: "Added",
		message: `Song added successfully`
	})
}

const updateSongById = async(req, res) => {
	//? Grab songId from request params
	const songId = req.params.id
	const updatedSong = req.body

	//? Validate schema

	//? Find Song By Id
	const existingSongIndex = songs_db.findIndex((song) => song.id.includes(songId))

	//? Check if song index is > 0
	if(existingSongIndex){
		//? Update the song
		songs_db[existingSongIndex] = updatedSong

		//? Return response
		return res.status(200).json({
			status: "Updated",
			message: "Song has been updated",
			data: updatedSong
		})
	}

	//? Else return not found
	return res.status(404).json({
		status: "Not Found",
		message: "Song not found"
	})
}

const deleteSongById = async(req, res) => {
	//? Grab the songId from request params
	const songId = req.params.id

	//? Find Song By Id
	const existingSongIndex = songs_db.findIndex((song) => song.id.includes(songId))

	//? Delete the song for that index
	if(existingSongIndex){
		//? Delete the song at that index
		songs_db.splice(existingSongIndex, 1)

		return res.status(201).json({
			status: "Deleted",
			message: `Song deleted successfully for id: ${songId}`
		})
	}

	//? Else return not found
	return res.status(404).json({
		status: "Not Found",
		message: "Song not found"
	})

}

const deleteAllSongs = async(req, res) => {
	const songCountBeforeDeletion = songs_db.length

	console.log("Before deletion: ",songs_db)
	songs_db.splice(0,songs_db.length)
	console.log("After deletion: ",songs_db)

	return res.status(201).json({
		status: "Deleted",
		message: `${songCountBeforeDeletion} songs were deleted successfully`
	})
}

export {
	getAllSongs,
	getSongById,
	addSong,
	updateSongById,
	deleteSongById,
	deleteAllSongs
}
