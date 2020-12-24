import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, ListGroupItem } from "react-bootstrap"
import photos from "../data"
import Calender from "../components/Calendar"

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
                { photo.id === 2 && <Col md={6} className="photo">
                    <Image
                        width="300px"
                        height="300px"
                        fluid
                        src={photo.url}
                        alt={photo.name}
                    />
                </Col>}
                { photo.id === 3 && Calender() }
                <Col md={3} className="text">
                    <ListGroup variant="flush">
                        { photo.id === 1 && <ListGroupItem>
                            <h1>{photo.name}</h1>
                            <p> 
                            push up<img alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSRdJ0S7NWl7xxktxOr5RyyJ6Ine1tqexVg&usqp=CAU.jpg'/>
                            Mainly exercise the muscles of the body, the body is stabilized on its surface,
                            and by increasing the height of the water surface to the surface of the water, 
                            the body is stabilized by standing (like steps of stairs). 
                            The pressure is done by the hands to raise the body until the hands are upright. </p>
                            <p> 
                            Side exercise<img alt="" src='https://thumbs.dreamstime.com/b/continuous-line-drawing-man-stretching-young-energetic-male-exercise-side-plank-gym-fitness-center-vector-illustration-183308283.jpg'/>
                            This exercise helps to increase flexibility and improve the shape of the humeral muscles,
                            it is important to do this exercise perfectly to get results, 
                            it does not depend on making alternating movements but rather maintaining the posture of the body for a certain period of time,
                            this exercise is carried out by lying on one side of the body and relying on The metatarsal of the foot from the outside, 
                            put the hand on the ground in the form of a letter (L) so that the upper arm from the elbow to the shoulder is perpendicular to the ground and then the entire torso is raised so that the body rests on the forearm adjacent to the ground and the outer metatarsal of the foot only, this position is maintained for 30 Again, 
                            it is important to do the exercise on both sides. </p>
                        </ListGroupItem>}
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
