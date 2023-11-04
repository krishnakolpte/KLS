/** @format */

import { Headline } from "../../Components/Newsess";
import Sidebar from "./Sidebar";

function CreateEvent() {
    return (
        <section className="create-news">
            <div className="news-container">
                <Headline
                    title={"Create Event"}
                    description={"the new Event"}
                />
                <form>
                    <label>Titel</label>
                    <input
                        type="text"
                        placeholder="Enter The title"
                    />
                    <label>Description</label>
                    <input
                        type="text"
                        placeholder="Enter The Description"
                    />
                    <label>Date</label>
                    <input
                        type="date"
                        placeholder="Enter The date"
                    />
                    <label>Image</label>
                    <input
                        type="file"
                        placeholder="chosefile"
                    />
                    <button>Create Event</button>
                </form>
            </div>
            <Sidebar />
        </section>
    );
}

export default CreateEvent;
