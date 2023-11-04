/** @format */

import Sidebar from "./Sidebar";
import { Headline } from "../../Components/Newsess";

function Profile() {
    return (
        <section className="profile">
            <main>
                <Headline
                    title={"Profile"}
                    description={"the profile"}
                />
                <div className="info">
                    <div className="profile-picture">
                        <img
                            src="https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="user name"
                        />
                    </div>
                    <div className="content">
                        <h3>Student Name</h3>
                    </div>
                </div>
            </main>
            <Sidebar />
        </section>
    );
}

export default Profile;
