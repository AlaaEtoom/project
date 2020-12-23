import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, ListGroupItem } from "react-bootstrap"
import photos from "../data"

const PhotoScreen = ({ match }) => {
    const [text, setText] = useState("")
    const [paragraph, setParagraph] = useState("")
    const photo = photos.find((p) => p.id === Number(match.params.id))

    const handleSubmit = (event) => {
        event.preventDefault()
        setParagraph(text)
        setText("")
    }

    return (
        <div className="photoScreen">
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            <Row>
                <Col md={6} className="photo">
                    <Image
                        width="300px"
                        height="300px"
                        fluid
                        src={photo.url}
                        alt={photo.name}
                    />
                </Col>
                <Col md={3} className="text">
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h1>{photo.name}</h1>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h3>{photo.description}</h3>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                <p>{paragraph}</p>
                {photo.id === 2 && <form onSubmit={handleSubmit}>
                    Weight: <input
                        placeholder="Type something...."
                        value={text}
                        onChange={({ target }) => setText(target.value)}
                    />
                    <button type="submit">Add</button>
                </form>}
                </Col>
            </Row>
        </div>
    )
}

export default PhotoScreen
