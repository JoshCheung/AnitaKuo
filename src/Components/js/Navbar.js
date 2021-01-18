import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Icon, InlineIcon } from '@iconify/react';
import '../css/Navbar.css';
import Logo from '../../media/logo.png';
import AnitaKuo from '../../media/AnitaKuo.png';
import instagramIcon from '@iconify/icons-fa-brands/instagram';
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
                                <div className="email-container"> 
                                    <div className="email">
                                        anitakuo.0328@gmail.com
                                    </div>
                                </div>
                                <div className="inner-navbar">
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
                                </div>
                                
                                <li className="nav-headers icon-ig">
                                    <a href="https://www.instagram.com/anitakuooo/">
                                        <Icon icon={instagramIcon}
                                        style={{fontSize: "100%", color: "gray", cursor: "pointer",  height: "100%"}}/> 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            
        );
    }
}
