import React, { Component } from "react";
import '../css/Navbar.css';
import Logo from '../../media/logo.png';
import AnitaKuo from '../../media/AnitaKuo.png';
import image from '../../media/wallpaper.jpg'

export default class Navbar extends Component {

    render() {
        return (
            <div style={{height: "100vh", overflowX: "hidden"}}>
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
                                <li className="">
                                    About
                                </li>

                                <li className="">
                                    Lessons
                                </li>

                                <li className="">
                                    Recordings
                                </li>

                                <li className="">
                                    Hobbies
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="nav-image">
                    <img className="wallpaper" src={image}/>
                </div>
            </div>
            
        );
    }
}
