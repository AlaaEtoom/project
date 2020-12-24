import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import photosRoutes from './routes/photos.js'

const app = express() // the actuall express app
dotenv.config() // to access the environment variables

app.use(bodyParser.json({ limit: "30mb", extended: true })) // to parse all incoming requests to json
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors()) // to make access from anywhere

// connecting to MongoDB
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Can\'t connect to MongoDB', error.message))

// routes
app.use('/api/photos', photosRoutes)
app.use('/', (request, response) => {
    response.send('API is running')
})

// running the server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))