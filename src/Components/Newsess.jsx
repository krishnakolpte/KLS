/** @format */

import CustomCarousel from "./CustomCarousel";

function Newsess() {
    const data = [
        {
            src: "https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "The News",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita temporibus inventore velit commodi error ipsam voluptate porro quos! Dignissimos!",
            date: "01/11/23",
        },
        {
            src: "https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "The News",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita temporibus inventore velit commodi error ipsam voluptate porro quos! Dignissimos!",
            date: "01/11/23",
        },
        {
            src: "https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "The News",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita temporibus inventore velit commodi error ipsam voluptate porro quos! Dignissimos!",
            date: "01/11/23",
        },
    ];
    return (
        <section
            id="news"
            className="latest-news">
            <Headline
                title={"Latest newsess"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                }
            />
            <CustomCarousel data={data} />
        </section>
    );
}

export default Newsess;

export const Headline = ({ title, description }) => (
    <header className="headline">
        <h2>{title}</h2>
        <p>{description}</p>
    </header>
);
