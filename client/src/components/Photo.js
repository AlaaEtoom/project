import React from "react"
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"

const Photo = ({ photo }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Row>
                <Col md={6}>
                    <Link to={`/photo/${photo.id}`}>
                        <Card.Img src={photo.url} variant="top" />
                    </Link>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{photo.name}</h3>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Card>
    )
}

export default Photo
