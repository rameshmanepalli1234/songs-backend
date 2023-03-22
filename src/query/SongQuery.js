import { SongModel } from "../models/Song.js"

class SongQuery {
    static schema = "Songs"

    static async getOne(query){
        const songEntity = await SongModel.findOne(query)
        if(songEntity == null) return { status: 404 }
        return { status: 200, data: songEntity }
    }

    static async getMany(query){
        const songEntities = await SongModel.find(query)
        return { status: 200 , data: songEntities }
    }

    static async addOne(songBody){
        const songEntity = new SongModel(songBody)
        const savedSongResponse = await SongQuery.save(songEntity)
        return savedSongResponse
    }

    static async updateOne(query, songBody){
        //? Check if song exists
        const foundSongEntityResponse = await SongQuery.getOne(query)
        if(foundSongEntityResponse === 404){
            return foundSongEntityResponse
        }

        //? Grab the entity from the response
        const foundSongEntity = foundSongEntityResponse.data

        //? Update song if found
        foundSongEntity.firstLetter = songBody.firstLetter
        foundSongEntity.title = songBody.title
        foundSongEntity.lyric = songBody.lyric
        foundSongEntity.englishTitle = songBody.englishTitle

        //? Save the song
        const savedSongResponse = await SongQuery.save(foundSongEntity)
        return savedSongResponse
    }

    static async deleteOne(query){
        //? Check if song exists
        const foundSongEntityResponse = await SongQuery.getOne(query)
        if(foundSongEntityResponse === 404){
            return foundSongEntityResponse
        }

        //? Grab the entity
        const foundSongEntity = foundSongEntityResponse.data

        //? delete song if found
        const deleteByIdResponse = await foundSongEntity
            .remove()
            .then((info) => {
                console.log(info)
                return { status: 201}
            })
            .catch((error) => {
                console.log(error)
                return { status: 500 }
            })
        
        return deleteByIdResponse
    }

    static async deleteMany(){
        const deleteManyResponse = SongModel
        .deleteMany()
        .then((info) => {
            console.log(info)
            return { status: 201}
        })
        .catch((error) => {
            console.log(error)
            return { status: 500 }
        })
        return deleteManyResponse
    }

    static async save(songEntity){
        return await songEntity
			.save()
			.then((songInfo) =>{ 
                console.log(songInfo) 
                return { status: 201 } 
            })
			.catch((error) => { 
                console.error(error) 
                return { status: 500 }
            })
    }
}

export { SongQuery }