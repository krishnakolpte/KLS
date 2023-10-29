/** @format */
import { BiLogoReact } from "react-icons/bi";

function QuoteCard({ color }) {
    return (
        <div
            className="quote-card"
            style={{ backgroundColor: color }}>
            <BiLogoReact className="flower-one" />
            <div className="content">
                <q>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                    atque!
                </q>
                <p>- Krishna kolapte.</p>
            </div>
            <BiLogoReact className="flower-two" />
        </div>
    );
}

export default QuoteCard;
