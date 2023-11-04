/** @format */
import { Link } from "react-router-dom";
import { Headline } from "../../Components/Newsess";
import QuoteCard from "../../Components/QuoteCard";

function LoginPage() {
    return (
        <section className="login">
            <div className="login-container">
                <Headline title={"Welcome to Kls Comunity"} />
                <form>
                    <label>enter email</label>
                    <input
                        type="email"
                        placeholder="Enter The Email"
                    />
                    <label>enter password</label>
                    <input
                        type="password"
                        placeholder="Enter The Password"
                    />
                    <p>
                        forget password?{" "}
                        <Link to={"/forgetpassword"}>Click here</Link>
                    </p>
                    <button>Login</button>
                </form>
            </div>
            <QuoteCard />
        </section>
    );
}

export default LoginPage;
