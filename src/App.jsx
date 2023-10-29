/** @format */
import { Route, Routes } from "react-router-dom";

import "./Styles/config.scss";

import Navbar from "./Layout/navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Layout/navbar/Footer";
import About from "./Pages/About";
import Courcess from "./Pages/Courcess";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/courcess"
                    element={<Courcess />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
