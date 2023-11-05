/** @format */

import Sidebar from "./Sidebar";
import { Headline } from "../../Components/Newsess";
import { RiDeleteBinFill } from "react-icons/ri";

function Newsess() {
    return (
        <section className="dashboard-newsess">
            <main>
                <Headline
                    title={"Newsess"}
                    description={"the all Newsess"}
                />
                <div className="news-lists">
                    <div className="list">
                        <div className="img">
                            <img
                                src="https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="News img"
                            />
                        </div>
                        <h2>news title</h2>
                        <p>20/12/2003</p>
                        <div className="svg">
                            <RiDeleteBinFill />
                        </div>
                    </div>
                    <div className="list">
                        <div className="img">
                            <img
                                src="https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="News img"
                            />
                        </div>
                        <h2>
                            news titlenhghgkjhjhjhh hg,jhfkujhjhkjh ytgffjhfjh
                        </h2>
                        <p>20/12/2003</p>
                        <div className="svg">
                            <RiDeleteBinFill />
                        </div>
                    </div>
                </div>
            </main>
            <Sidebar />
        </section>
    );
}

export default Newsess;
