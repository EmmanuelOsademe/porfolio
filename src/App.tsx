import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { About, Contact, Experience, Feedbacks,  Hero, Navbar, Tech, Works } from "./components";
import { StarsCanvas } from "./components/canvas";

const App: React.FC = () => {

    return (
        <Router>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </Router>
    )
}

export default App;