import Photo from '../models/Photo.js'

const getPhotos = async (request, response) => {
    try {
        const photos = await Photo.find()

        response.status(200).json(photos)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

export default getPhotos