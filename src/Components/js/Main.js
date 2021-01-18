import React, { Component } from "react";
import "../css/Main.css";
import Navbar from '../js/Navbar.js';
import Bio from './Biography.js';
import Lessons from './Lessons.js';
import Performances from './Performances.js';
import Hobbies from './Hobbies.js';
import Contacts from './Contacts.js';
// import image from '../../media/wallpaper.jpg';
import image2 from '../../media/yosemite.jpeg';
import image from '../../media/half-dome.jpeg';


class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
        
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            
            <div className="home">
                <Navbar/>
                <div className="dividing-image">
                    <img className="div-wallpaper" src={image}/>
                </div>
                <Bio id="about"/>
                <Lessons id="lessons"/>
                <Performances id="recordings"/>
                <div className="dividing-image">
                    <img className="div-wallpaper" src={image2}/>
                </div>
                <Hobbies id="hobbies"/>
                <Contacts id="contacts"/>

            </div>
        );
    }
}

export default Main;
