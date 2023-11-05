/** @format */
import { Link, useLocation } from "react-router-dom";
import { RiAddCircleFill, RiUser3Fill } from "react-icons/ri";

function Sidebar() {
    const location = useLocation();
    return (
        <section className="sidebar">
            <LinkButton
                url={"/dashboard/profile"}
                Icon={RiUser3Fill}
                title={"profile"}
                active={location.pathname === "/dashboard/profile"}
            />
            <LinkButton
                url={"/dashboard/createnews"}
                Icon={RiAddCircleFill}
                title={"Create News"}
                active={location.pathname === "/dashboard/createnews"}
            />
            <LinkButton
                url={"/dashboard/createevent"}
                Icon={RiAddCircleFill}
                title={"Create Event"}
                active={location.pathname === "/dashboard/createevent"}
            />
            <LinkButton
                url={"/dashboard/newsess"}
                Icon={RiAddCircleFill}
                title={"Newsess"}
                active={location.pathname === "/dashboard/newsess"}
            />
            <LinkButton
                url={"/dashboard/events"}
                Icon={RiAddCircleFill}
                title={"Events"}
                active={location.pathname === "/dashboard/events"}
            />
        </section>
    );
}

export default Sidebar;

const LinkButton = ({ url, Icon, title, active }) => (
    <Link to={`${url}`}>
        <button className={`link-btn ${active ? "active" : "unactive"}`}>
            <Icon /> {`${title}`}
        </button>
    </Link>
);
