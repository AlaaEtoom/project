import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import PhotoScreen from "./screens/PhotoScreen"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
    return (
        <div>
            <Header />
            <Router>
                <Route path="/photo/:id" component={PhotoScreen} />
                <Route exact path="/" component={HomeScreen} />
            </Router>
            <Footer />
        </div>
    )
}

export default App
