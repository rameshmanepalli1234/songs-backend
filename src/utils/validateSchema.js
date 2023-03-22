//? Validate Schema
const isValidSchema = (songBody) => {
    try {
        if(!typeof songBody.firstLetter == 'string') return false
        if(!typeof songBody.title == 'string') return false
        if(!typeof songBody.lyric== 'string') return false
        if(!typeof songBody.englishTitle == 'string') return false
        return true
    }
    catch (error) {
        return false
    }
}

export { isValidSchema }