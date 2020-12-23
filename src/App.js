import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import PhotoScreen from "./screens/PhotoScreen"

const App = () => {
    return (
        <div>
            <Router>
                <Route path="/photo/:id" component={PhotoScreen} />
                <Route exact path="/" component={HomeScreen} />
            </Router>
        </div>
    )
}

export default App
