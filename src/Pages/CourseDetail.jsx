/** @format */
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import QuoteCard from "../Components/QuoteCard";

function CourseDetail() {
    const sylabus = [
        {
            year: "1'st year",
            sems: [
                {
                    semTitle: "1'st Sem",
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
                    semTitle: "2'nd Sem",
                    subjects: [
                        { name: "sub1" },
                        { name: "sub2" },
                        { name: "sub3" },
                        { name: "sub4" },
                        { name: "sub5" },
                        { name: "sub6" },
                    ],
                },
            ],
        },
        {
            year: "2'nd year",
            sems: [
                {
                    semTitle: "3'rd Sem",
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
                    semTitle: "4'th Sem",
                    subjects: [
                        { name: "sub1" },
                        { name: "sub2" },
                        { name: "sub3" },
                        { name: "sub4" },
                        { name: "sub5" },
                        { name: "sub6" },
                    ],
                },
            ],
        },
        {
            year: "3'rd year",
            sems: [
                {
                    semTitle: "5'th Sem",
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
                    semTitle: "6'th Sem",
                    subjects: [
                        { name: "sub1" },
                        { name: "sub2" },
                        { name: "sub3" },
                        { name: "sub4" },
                        { name: "sub5" },
                        { name: "sub6" },
                    ],
                },
            ],
        },
    ];
    const projects = [
        {
            name: "WEb applications",
        },
        {
            name: "Androide applications",
        },
        {
            name: "AI applications",
        },
        {
            name: "Network applications",
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sapiente, perferendis itaque nisi quaerat placeat
                        eum impedit minus laboriosam consectetur eius!
                    </p>
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
                            year={item.year}
                            sems={item.sems}
                        />
                    ))}
                    <SubAcordian
                        semTitle={"Final Projects"}
                        subjects={projects}
                    />
                </div>
            </div>
            <QuoteCard color={"tomato"} />
        </section>
    );
}

export default CourseDetail;

const Acordian = ({ year, sems }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="acordian">
            <div
                className="header"
                onClick={() => setOpen(!open)}>
                <div className="icon">
                    {open ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
                </div>
                <p className="title">{year}</p>
            </div>
            <div
                className="acordian-data"
                style={{ display: open ? "flex" : "none" }}>
                {sems.map(({ semTitle, subjects }, i) => (
                    <div
                        className="list"
                        key={i}>
                        <SubAcordian
                            semTitle={semTitle}
                            subjects={subjects}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const SubAcordian = ({ semTitle, subjects }) => {
    const [subopen, setSubOpen] = useState(false);
    return (
        <div className="acordian">
            <div
                className="header"
                onClick={() => setSubOpen(!subopen)}>
                <div className="icon">
                    {subopen ? (
                        <AiOutlineMinusCircle />
                    ) : (
                        <AiOutlinePlusCircle />
                    )}
                </div>
                <p className="title">{semTitle}</p>
            </div>
            <div
                className="acordian-data"
                style={{ display: subopen ? "flex" : "none" }}>
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

// const AcordianData = ({ subjects, open }) => (

// );
