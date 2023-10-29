/** @format */
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <h3>Lorem ipsum dolor sit, amet consectetur</h3>
            <div className="footer-header">
                <div className="navigations">
                    <h5>About</h5>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tenetur quisquam nobis sit fugit vitae fugiat.
                        </p>
                    </div>
                </div>
                <div className="navigations">
                    <h5>Example</h5>
                    <div className="content">
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                    </div>
                </div>
                <div className="navigations">
                    <h5>Example</h5>
                    <div className="content">
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                    </div>
                </div>
                <div className="navigations">
                    <h5>Example</h5>
                    <div className="content">
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Example</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copy-right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, dolor.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
