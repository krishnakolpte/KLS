/** @format */

import { Headline } from "../Components/Newsess";
import { BiPhoneCall, BiLogoGmail, BiLocationPlus } from "react-icons/bi";

function Contact() {
    return (
        <section className="contact">
            <div className="contact-container">
                <Headline title={"Contact us"} />
                <div className="contact-info">
                    <a
                        href="tel:1234567890"
                        className="box">
                        <div className="svg">
                            <BiPhoneCall />
                        </div>
                        <h2>Call Now</h2>
                        <p>9:30am - 3:50pm</p>
                        <h3>+91 1234567890</h3>
                    </a>
                    <a
                        href="mailto:klshly.edu@gmail.com"
                        className="box">
                        <div className="svg">
                            <BiLogoGmail />
                        </div>
                        <h2>Call Now</h2>
                        <p>24/7</p>
                        <h3>klshly.edu@gmail.com</h3>
                    </a>
                    <div className="box">
                        <div className="svg">
                            <BiLocationPlus />
                        </div>
                        <h2>Location</h2>
                        <h4>
                            Kls collage of computer application,udyoga vidhya
                            nagar,haliyal-581329
                        </h4>
                    </div>
                </div>
                <div className="map-location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.992186153103!2d74.75304489999999!3d15.322659799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf2761966c754d%3A0x948d75b5eded5733!2sKLS%20PU%20Science%2C%20Commerce%20and%20BCA%20College%20Haliyal!5e0!3m2!1sen!2sin!4v1698728772881!5m2!1sen!2sin"></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact;
