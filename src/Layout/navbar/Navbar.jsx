/** @format */
import { Link } from "react-router-dom";
import logoImg from "../../../public/logo.png";
import { BiMenuAltRight, BiLogIn, BiHome } from "react-icons/bi";
import { AiFillFileAdd } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const NavDrawer = ({ setOpendrawer, user }) => (
    <div className="drawer">
        <div className="opc-layer"></div>
        <div className="drawer-content">
            <div className="drawer-header">
                <span className="headding">KLS</span>
                <span
                    className="close-btn"
                    onClick={() => setOpendrawer(false)}>
                    <MdClose />
                    <span className="text">Close</span>
                </span>
            </div>
            <div className="drawer-body">
                <Link
                    to={"/"}
                    className="link-btn"
                    onClick={() => setOpendrawer(false)}>
                    <BiHome />
                    <span className="link-text">Home</span>
                </Link>

                <Link
                    to={"/courcess"}
                    className="link-btn">
                    <span
                        className="link-text"
                        onClick={() => setOpendrawer(false)}>
                        Courcess
                    </span>
                </Link>
                <Link
                    to={"/fecilities"}
                    className="link-btn"
                    onClick={() => setOpendrawer(false)}>
                    <AiFillFileAdd />
                    <span className="link-text">Fecilities</span>
                </Link>
                <Link
                    to={"/about"}
                    className="link-btn"
                    onClick={() => setOpendrawer(false)}>
                    <span className="link-text">About</span>
                </Link>
                <Link
                    to={"/contact"}
                    className="link-btn"
                    onClick={() => setOpendrawer(false)}>
                    <span className="link-text">contact</span>
                </Link>
            </div>
            <div className="login-dashboard">
                {user ? (
                    <Link
                        to={"/dashboard"}
                        className="link-btn"
                        onClick={() => setOpendrawer(false)}>
                        <BiLogIn />
                        <span className="link-text">Dashboard</span>
                    </Link>
                ) : (
                    <Link
                        to={"/login"}
                        className="link-btn"
                        onClick={() => setOpendrawer(false)}>
                        <BiLogIn />
                        <span className="link-text">Login</span>
                    </Link>
                )}
            </div>
        </div>
    </div>
);

function Navbar() {
    const isAdmin = true;
    const [openDrawer, setOpendrawer] = useState(false);

    const handleClick = () => {
        setOpendrawer(true);
    };

    return (
        <nav>
            <div className="nav-body">
                <div className="nav-body-left">
                    <div className="logo-img-container">
                        <img
                            src={logoImg}
                            alt="Collage Logo"
                            className="logo-img"
                        />
                    </div>
                    <h1>Karnataka law socity</h1>
                    <h2 className="hphone">KLS</h2>
                </div>
                <div className="nav-body-middle">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/courcess"}>Courcess</Link>
                    <Link to={"/fecilities"}>Fecilities</Link>
                    <Link to={"/about"}>About Us</Link>
                    <Link to={"/contact"}>Contact</Link>
                </div>
                <div className="nav-body-right">
                    {isAdmin ? (
                        <Link to={"/dashboard"}>
                            <button>Dashboard</button>
                        </Link>
                    ) : (
                        <Link to={"/login"}>
                            <button>Login</button>
                        </Link>
                    )}
                </div>
                <BiMenuAltRight onClick={handleClick} />
                {openDrawer && (
                    <NavDrawer
                        setOpendrawer={setOpendrawer}
                        user={isAdmin}
                    />
                )}
            </div>
        </nav>
    );
}

export default Navbar;
