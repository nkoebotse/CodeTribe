
import React from "react";
import logo from "../images/logo.svg";
import iconArrowDown from "../images/iconArrowDown.svg"; 
import iconcalendar from "../images/iconcalendar.svg";
import iconTodo from "../images/iconTodo.svg";
import iconReminders from "../images/iconReminders.svg";
import iconPlanning from "../images/iconPlanning.svg";
import clientDatabiz from "../images/clientDatabiz.svg";
import clientAudiophile from "../images/clientAudiophile.svg";
 import clientMeet from "../images/clientMeet.svg";
 import clientMaker from "../images/clientMaker.svg";
 import imageHeroDesktop from "../images/imageHeroDesktop.png"
 import  "../styles.css"


function Navbar() {
    return (
        <>

            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Frontend Mentor</title>
                </head>
                <body>
                    <nav>
                    <div class="nav-container">
                    <div class="nav-left">
                            <div className="nav-logo">
                            <img src={logo} alt="" />
                            
                            </div>



                            <ul class="nav-links">
                            <li>Features
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
                                
                                    <li>Company
                                    <img src={iconArrowDown} alt="arrow" />
                                </li>
                                <li>
                                <div className="sub-menu two">
                                    <p className="sub-link">
                                        
                                       History
                                    </p>
                                    <p className="sub-link">
                                        
                                        Our Team
                                    </p>
                                    <p className="sub-link">
                                       
                                        Blog
                                    </p>
                                    </div>
                                    </li>
                                    <li>Careers</li>
                                    <li>About</li>
                                    </ul>
                                </div>

                        
                            
                            <div className="nav-right">
                                <button class="transparent-btn">Login</button>
                                <button class="outlined-btn">Register</button>

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
                           get your team in sync.no matter your location.streamline processes.create team rituals,and watch productivity soar 
                        </p>
                       <button class="primary-btn">Learn more</button>
                       <div className="logoes">
                        <img src={clientDatabiz} alt="" />
                        <img src={clientAudiophile} alt="" />
                        <img src={clientMeet} alt="" />
                        <img src={clientMaker} alt="" />

                       </div>

                    </div>
                    <div className="main-right">
                        <picture>
                            <img src={imageHeroDesktop} alt="" />
                        </picture>
                    </div>

                   </div>
                   </main>
                </body>
                
            </html>


        </>
    );
}
 
export default Navbar;