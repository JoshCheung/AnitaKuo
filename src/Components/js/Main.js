import React, { Component } from "react";
import "../css/Main.css";
import Navbar from '../js/Navbar.js';
import Bio from './Biography.js';
import Lessons from './Lessons.js';
import Performances from './Performances.js';
import Hobbies from './Hobbies.js';
import image from '../../media/wallpaper.jpg';


class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
        
        }
    }


    
    render() {
        return (
            
            <div className="home">
                <Navbar/>
                <Bio/>
                {/* <Lessons/> */}
                <Performances/>
                <div className="dividing-image">
                    <img className="div-wallpaper" src={image}/>
                </div>
                <Hobbies/>

            </div>
        );
    }
}

export default Main;
