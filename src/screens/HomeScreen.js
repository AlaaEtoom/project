import React from "react"
import { Row, Col } from "react-bootstrap"
import Photo from "../components/Photo"
import photos from "../data"

const HomeScreen = () => {
    const photour4 = "https://p14cdn4static.sharpschool.com/UserFiles/Servers/Server_697798/Image/Departments/Student%20Services/Athletics-sports-images-banner-color.fw.png"
   
    return (
        <div className="homeScreen">
            <img alt="" src={photour4} width='100%' height='250'/>
            <div>
                <p> Sport includes all forms of competitive physical activity or games which,
                    through casual or organized participation, at least in part aim to use, 
                    maintain or improve physical ability and skills while providing enjoyment to participants,
                    and in some cases, entertainment for spectators.
                </p>
            </div>
            <Row className="photoContainer">
                {photos.map((photo) => (
                    <Col key={photo.name} sm={12} md={6} lg={4} xl={3}>
                        <Photo photo={photo} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
