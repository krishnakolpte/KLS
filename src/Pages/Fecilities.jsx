/** @format */
import { BiLibrary } from "react-icons/bi";
import { Headline } from "../Components/Newsess";
import QuoteCard from "../Components/QuoteCard";

function Fecilities() {
    return (
        <section className="fecilities">
            <Headline
                title={"our fecilities"}
                description={"the description"}
            />
            <FecilityCard />
            <FecilityCard color={"orange"} />
            <FecilityCard />
            <FecilityCard color={"orange"} />
            <FecilityCard />
            <FecilityCard color={"orange"} />
            <FecilityCard />
            <FecilityCard color={"orange"} />
            <FecilityCard />
            <FecilityCard color={"orange"} />
            <FecilityCard />
            <FecilityCard color={"orange"} />
            <QuoteCard />
        </section>
    );
}

export default Fecilities;

const FecilityCard = ({ color }) => (
    <div className="fecility">
        <div
            className="info"
            style={{ backgroundColor: color }}>
            <div className="svg">
                <BiLibrary />
            </div>
            <h2>Library labs labs labs</h2>
        </div>
        <div className="img">
            <img
                src="https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="fcility img"
            />
        </div>
    </div>
);
