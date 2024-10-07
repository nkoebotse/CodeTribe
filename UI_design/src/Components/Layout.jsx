
import logo from "../assets/logo.svg";
import iconArrowDown from "../assets/iconArrowDown.svg"; 
import iconcalendar from "../assets/iconcalendar.svg";
import iconTodo from "../assets/iconTodo.svg";
import iconReminders from "../assets/iconReminders.svg";
import iconPlanning from "../assets/iconPlanning.svg";
import clientDatabiz from "../assets/clientDatabiz.svg";
import clientAudiophile from "../assets/clientAudiophile.svg";
import clientMeet from "../assets/clientMeet.svg";
import clientMaker from "../assets/clientMaker.svg";
import imageHeroDesktop from "../assets/imageHeroDesktop.png";
import "../styles.css";

function Layout() {
    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="nav-left">
                        <div className="nav-logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <ul className="nav-links">
                            <li>
                                Features
                                <img src={iconArrowDown} alt="arrow" />
                                <div className="sub-menu one">
                                    <p className="sub-link">
                                        <img src={iconTodo} alt="" />
                                        Todo list
                                    </p>
                                    <p className="sub-link">
                                        <img src={iconcalendar} alt="" />
                                        Calendar
                                    </p>
                                    <p className="sub-link">
                                        <img src={iconReminders} alt="" />
                                        Reminders
                                    </p>
                                    <p className="sub-link">
                                        <img src={iconPlanning} alt="" />
                                        Planning
                                    </p>
                                </div>
                            </li>
                            <li>
                                Company
                                <img src={iconArrowDown} alt="arrow" />
                                <div className="sub-menu two">
                                    <p className="sub-link">History</p>
                                    <p className="sub-link">Our Team</p>
                                    <p className="sub-link">Blog</p>
                                </div>
                            </li>
                            <li>Careers</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <button className="transparent-btn">Login</button>
                        <button className="outlined-btn">Register</button>
                    </div>
                </div>
            </nav>
            <main>
                <div className="main-container">
                    <div className="main-left">
                        <h1 className="main-heading">
                            Make <br />
                            remote work
                        </h1>
                        <p className="main-content">
                            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                        </p>
                        <button className="primary-btn">Learn more</button>
                        <div className="logoes">
                            <img src={clientDatabiz} alt="Client Databiz" />
                            <img src={clientAudiophile} alt="Client Audiophile" />
                            <img src={clientMeet} alt="Client Meet" />
                            <img src={clientMaker} alt="Client Maker" />
                        </div>
                    </div>
                    <div className="main-right">
                        <picture>
                            <img src={imageHeroDesktop} alt="Hero" />
                        </picture>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Layout;
