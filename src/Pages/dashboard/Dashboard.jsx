/** @format */

import Sidebar from "./Sidebar";
import { Headline } from "../../Components/Newsess";

function Dashboard() {
    return (
        <section className="dashboard">
            <main>
                <Headline
                    title={"Dashboard"}
                    description={"the dashboard"}
                />
                <div className="dashboard-stats">
                    <div className="stat">
                        <h2>Students</h2>
                        <p>6543</p>
                    </div>
                    <div className="stat">
                        <h2>Staff</h2>
                        <p>6543</p>
                    </div>
                    <div className="stat">
                        <h2>Example</h2>
                        <p>6543</p>
                    </div>
                </div>
            </main>
            <Sidebar />
        </section>
    );
}

export default Dashboard;
