/** @format */

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CustomCarousel({ data }) {
    return (
        <Carousel
            className="carousel"
            showIndicators={true}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}>
            {data.map((item, i) => (
                <Content
                    key={i}
                    src={item.src}
                    title={item.title}
                    desc={item.description}
                    date={item.date}
                />
            ))}
        </Carousel>
    );
}

export default CustomCarousel;

const Content = ({ src, title, desc, date }) => (
    <div className="news-container">
        <div className="news-content">
            <img
                src={src}
                alt={title}
            />
            <div className="news-info">
                <h2>{title}</h2>
                <p>{desc}</p>
                <span>{date}</span>
            </div>
        </div>
    </div>
);
