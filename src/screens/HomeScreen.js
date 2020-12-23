import React from "react"
import { Row, Col } from "react-bootstrap"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Photo from "../components/Photo"
import photos from "../data"

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <Row className="photoContainer">
                {photos.map((photo) => (
                    <Col key={photo.name} sm={12} md={6} lg={4} xl={3}>
                        <Photo photo={photo} />
                    </Col>
                ))}
            </Row>
            <Footer />
        </div>
    )
}

export default HomeScreen
