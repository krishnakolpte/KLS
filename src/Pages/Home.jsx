/** @format */

import { CgMouse } from "react-icons/cg";
import Newsess from "../Components/Newsess";
import Events from "../Components/Events";
import QuoteCard from "../Components/QuoteCard";

function Home() {
    return (
        <section className="home">
            <div className="collage-banner">
                <p className="greet">Welcome to,</p>
                <h2 className="title">Karnataka Law socity</h2>
                <p className="tagline">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt, laboriosam.
                </p>
                <a href="#news">
                    <button>
                        Scroll <CgMouse />
                    </button>
                </a>
            </div>
            <Newsess />
            <Events />
            <QuoteCard color={"orange"} />
        </section>
    );
}

export default Home;
