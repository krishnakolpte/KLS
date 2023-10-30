/** @format */

import { Link } from "react-router-dom";
import { Headline } from "../Components/Newsess";
import QuoteCard from "../Components/QuoteCard";

function Courcess() {
    return (
        <section className="courcess">
            <main>
                <Headline
                    title={"Our courcess"}
                    description={"the description"}
                />
                <div className="course-list">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </main>
            <QuoteCard />
        </section>
    );
}

export default Courcess;

const CourseCard = () => (
    <div className="course-card">
        <img
            src={
                "https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="course-img"
        />
        <div className="couse-info">
            <h2>Pcmb</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                nulla.
            </p>
            <Link to={"/course/id"}>
                <button>Read More</button>
            </Link>
        </div>
    </div>
);
