/** @format */

import CustomCarousel from "./CustomCarousel";
import { Headline } from "./Newsess";

function Events() {
    const data = [
        {
            src: "https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "The Event",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita temporibus inventore velit commodi error ipsam voluptate porro quos! Dignissimos!",
            date: "01/11/23",
        },
        {
            src: "https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "The Event",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita temporibus inventore velit commodi error ipsam voluptate porro quos! Dignissimos!",
            date: "01/11/23",
        },
        {
            src: "https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "The Event",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita temporibus inventore velit commodi error ipsam voluptate porro quos! Dignissimos!",
            date: "01/11/23",
        },
    ];
    return (
        <section className="events">
            <Headline
                title={"Events"}
                description={"the events "}
            />
            <CustomCarousel data={data} />
        </section>
    );
}

export default Events;
