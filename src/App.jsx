/** @format */
import { Route, Routes } from "react-router-dom";

import "./Styles/config.scss";

import Navbar from "./Layout/navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Layout/navbar/Footer";
import About from "./Pages/About";
import Courcess from "./Pages/Courcess";
import CourseDetail from "./Pages/CourseDetail";
import Contact from "./Pages/Contact";
import Fecilities from "./Pages/Fecilities";
import LoginPage from "./Pages/auth/LoginPage";
import Dashboard from "./Pages/dashboard/Dashboard";
import Profile from "./Pages/dashboard/Profile";
import CreateNews from "./Pages/dashboard/CreateNews";
import CreateEvent from "./Pages/dashboard/CreateEvent";
import Newsess from "./Pages/dashboard/Newsess";
import Events from "./Pages/dashboard/Events";

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
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/fecilities"
                    element={<Fecilities />}
                />
                <Route
                    path="/courcess"
                    element={<Courcess />}
                />
                <Route
                    path="/course/:id"
                    element={<CourseDetail />}
                />
                <Route
                    path="/login"
                    element={<LoginPage />}
                />
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />
                <Route
                    path="/dashboard/profile"
                    element={<Profile />}
                />
                <Route
                    path="/dashboard/createnews"
                    element={<CreateNews />}
                />
                <Route
                    path="/dashboard/createevent"
                    element={<CreateEvent />}
                />
                <Route
                    path="/dashboard/newsess"
                    element={<Newsess />}
                />
                <Route
                    path="/dashboard/events"
                    element={<Events />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
