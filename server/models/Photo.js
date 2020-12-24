import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    photoUrl: String
})

const Photo = mongoose.model('Photo', schema)

export default Photo