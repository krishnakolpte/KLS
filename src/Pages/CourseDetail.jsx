/** @format */
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import QuoteCard from "../Components/QuoteCard";

function CourseDetail() {
    const sylabus = [
        {
            sem: "1 Sem",
            subjects: [
                { name: "sub1" },
                { name: "sub2" },
                { name: "sub3" },
                { name: "sub4" },
                { name: "sub5" },
                { name: "sub6" },
            ],
        },
        {
            sem: "2 Sem",
            subjects: [
                { name: "sub1" },
                { name: "sub2" },
                { name: "sub3" },
                { name: "sub4" },
                { name: "sub5" },
                { name: "sub6" },
            ],
        },
        {
            sem: "3 Sem",
            subjects: [
                { name: "sub1" },
                { name: "sub2" },
                { name: "sub3" },
                { name: "sub4" },
                { name: "sub5" },
                { name: "sub6" },
            ],
        },
        {
            sem: "4 Sem",
            subjects: [
                { name: "sub1" },
                { name: "sub2" },
                { name: "sub3" },
                { name: "sub4" },
                { name: "sub5" },
                { name: "sub6" },
            ],
        },
        {
            sem: "5 Sem",
            subjects: [
                { name: "sub1" },
                { name: "sub2" },
                { name: "sub3" },
                { name: "sub4" },
                { name: "sub5" },
                { name: "sub6" },
            ],
        },
        {
            sem: "6 Sem",
            subjects: [
                { name: "sub1" },
                { name: "sub2" },
                { name: "sub3" },
                { name: "sub4" },
                { name: "sub5" },
                { name: "sub6" },
            ],
        },
    ];
    return (
        <section className="course-details">
            <div className="course-info">
                <img
                    src="https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Cource img"
                />
                <div className="content">
                    <h2>Batuler in Computer Application</h2>
                    <p>
                        <b>Course Duration :</b> 3 years
                    </p>
                    <p>
                        <b>admissions :</b> Open
                    </p>
                    <Link to={"/contact"}>Enquire about admissions</Link>
                </div>
            </div>
            <div className="sylabus">
                <div className="headding">
                    <h3>Sylabus</h3>
                </div>
                <div className="sylabus-container">
                    {sylabus.map((item, i) => (
                        <Acordian
                            key={i}
                            sem={item.sem}
                            subjects={item.subjects}
                        />
                    ))}
                </div>
            </div>
            <QuoteCard color={"tomato"} />
        </section>
    );
}

export default CourseDetail;

const Acordian = ({ sem, subjects }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="acordian">
            <div
                className="header"
                onClick={() => setOpen(!open)}>
                <div className="icon">
                    {open ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
                </div>
                <p className="title">{sem}</p>
            </div>
            <div
                className="footer "
                style={{ display: open ? "flex" : "none" }}>
                {subjects.map((item, i) => (
                    <div
                        className="list"
                        key={i}>
                        <p className="description">{i + 1}.</p>
                        <p className="description">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
