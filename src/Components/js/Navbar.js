import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/Navbar.css';
import Logo from '../../media/logo.png';
import AnitaKuo from '../../media/AnitaKuo.png';
import image from '../../media/wallpaper.jpg'
import secondPic from '../../media/secondary-picture.jpg';

export default class Navbar extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <div className="nav-container">
                    <nav fixed="top" id="navbar">
                        <div className="logo" >
                            <img className="logo" src={Logo}/>
                        </div>
                        <div className="banner-name">
                            <img className="name" src={AnitaKuo}/>
                        </div>
                        <div className="navigation-bar">
                            <ul className="header">
                                <li className="nav-headers">
                                    <Link 
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        // offset={-70}
                                        duration={500}
                                        >
                                    About
                                    </Link>
                                </li>

                                <li className="nav-headers">
                                    <Link
                                        activeClass="active"
                                        to="lessons"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={600}
                                        >
                                    Lessons
                                    </Link>
                                    
                                </li>

                                <li className="nav-headers">
                                    <Link
                                        activeClass="active"
                                        to="recordings"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={700}
                                        >
                                    Recordings
                                    </Link>
                                </li>

                                <li className="nav-headers">
                                    <Link
                                        activeClass="active"
                                        to="hobbies"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                        >
                                    Hobbies
                                    </Link>
                                </li>

                                <li className="nav-headers">
                                    <Link
                                        activeClass="active"
                                        to="contacts"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={900}
                                        >
                                    Contacts
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            
        );
    }
}