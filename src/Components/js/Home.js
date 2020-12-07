import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "../css/Homepage.css";
import Bio from './Biography.js';
import profilePic from '../../media/temp-profile.jpg';
import AboutMe from '../../media/AboutMe.png';
import Hobbies from '../../media/Hobbies2.png';
import Contacts from '../../media/Contacts.png';
import Recordings from '../../media/Recordings.png';
import Repertoire from '../../media/Repertoire.png';
import repertoireLogo from '../../media/repertoire-logo.png';
import contactsLogo from '../../media/contacts-logo.png';
import hobbiesLogo from '../../media/hobbies-logo2.png';
import performancesLgoo from '../../media/performances-logo.png';




class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
        
        }
    }

    setHeader(header) {
        this.props.setHeader(header);
    }
    
    render() {
        return (
            <div className="component-container"> 
                <div id="home-component" class="grid">
                    <div className="profile" onClick={() => this.setHeader(AboutMe)}>
                        <Link to="/AnitaKuo/bio">
                            <img id="bioImage" className="profile-component" src={profilePic}></img>
                        </Link>
                    </div>
                    <div className="hobbies">
                        <Link to="/AnitaKuo/hobbies">
                            <div className="hobbies-component" onClick={() => this.setHeader(Hobbies)}> 
                                <img className="icons" src={hobbiesLogo}></img>
                            </div>
                        </Link>
                    </div>
                    <div className="contacts">
                        <Link to="/AnitaKuo/contacts">        
                            <div className="contacts-component" onClick={() => this.setHeader(Contacts)}>
                                <img className="icons" src={contactsLogo}></img>
                            </div>
                        </Link>
                    </div>
                    <div className="performances">
                        <Link to="/AnitaKuo/performances">
                            <div className="performances-component" onClick={() => this.setHeader(Recordings)}>
                                <img className="icons" src={performancesLgoo}></img>
                            </div>
                        </Link>
                    </div>
                    <div className="music">
                        <Link to="/AnitaKuo/repertoirelist">
                            <div className="repertoire-component" onClick={() => this.setHeader(Repertoire)}>
                                <img className="icons" src={repertoireLogo}></img>
                            </div>
                        </Link>
                    </div>
                    {/* <div className="nameplate">
                        <div className="nameplate-component">
                            <div className="name"> Anita Kuo</div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Home;





 