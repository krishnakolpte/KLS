/** @format */
import QuoteCard from "../Components/QuoteCard";
import { Headline } from "../Components/Newsess";

function About() {
    const url =
        "https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    return (
        <section className="about-page">
            <div className="banner">
                <h3>About Us</h3>
                <h2>KLS bca collage haliyal</h2>
            </div>
            <main>
                <Box
                    headding={"about us"}
                    subHeadding={"sub headding"}
                    description={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem magnam sed laboriosam error odio minima porro doloribus repellendus ex tempore"
                    }
                    src={url}
                    srcTitle={"Collage Image"}
                />
                <Box
                    headding={"our story"}
                    subHeadding={"sub headding"}
                    description={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem magnam sed laboriosam error odio minima porro doloribus repellendus ex tempore"
                    }
                    src={url}
                    srcTitle={"Collage Image"}
                />
                <QuoteCard color={"orange"} />
                <Box
                    headding={"vission"}
                    subHeadding={"sub headding"}
                    description={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem magnam sed laboriosam error odio minima porro doloribus repellendus ex tempore"
                    }
                    src={url}
                    srcTitle={"Collage Image"}
                />
                <Box
                    headding={"mission"}
                    subHeadding={"sub headding"}
                    description={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem magnam sed laboriosam error odio minima porro doloribus repellendus ex tempore"
                    }
                    src={url}
                    srcTitle={"Collage Image"}
                />
                <QuoteCard color={"#4526a5"} />
                <div className="objectives">
                    <Headline
                        title={"Objectives"}
                        description={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem magnam sed laboriosam error odio minima porro doloribus repellendus ex tempore"
                        }
                    />
                    <div className="objective-container">
                        <div className="objective">
                            <div className="number">1</div>
                            <p className="obj">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Facilis fuga blanditiis rerum
                                minus, incidunt quam?
                            </p>
                        </div>
                        <div className="objective">
                            <p className="number">2</p>
                            <p className="obj">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Facilis fuga blanditiis rerum
                                minus, incidunt quam?Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Facilis fuga
                                blanditiis rerum minus, incidunt quam?
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default About;

const Box = ({ headding, subHeadding, description, src, srcTitle }) => (
    <div className="box">
        <div className="heading">
            <h3>{headding}</h3>
        </div>
        <div className="content">
            <div className="left">
                <h4 className="sub-headding">{subHeadding}</h4>
                <p className="description">{description} </p>
            </div>
            <div className="right">
                <img
                    width={"100px"}
                    src={src}
                    alt={srcTitle}
                />
            </div>
        </div>
    </div>
);
