import React from "react"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, ListGroupItem } from "react-bootstrap"
import photos from "../data"

const PhotoScreen = ({ match }) => {
    const photo = photos.find((p) => p.id === Number(match.params.id))

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
                            <h3>fghfghfgh{photo.description}</h3>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default PhotoScreen
