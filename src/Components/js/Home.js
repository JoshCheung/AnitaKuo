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
                    <div className="profile" onClick={() => this.setHeader("About Me")}>
                        <Link to="/bio">
                            <img id="bioImage" className="profile-component" src={profilePic}></img>
                        </Link>
                    </div>
                    <div className="hobbies">
                        <Link to="/hobbies">
                            <div className="hobbies-component" onClick={() => this.setHeader("Hobbies")}> 
                                Hobbies
                            </div>
                        </Link>
                    </div>
                    <div className="contacts">
                        <Link to="/contacts">        
                            <div className="contacts-component" onClick={() => this.setHeader("Contacts")}>
                                Contacts 
                            </div>
                        </Link>
                    </div>
                    <div className="performances">
                        <Link to="/performances">
                            <div className="performances-component" onClick={() => this.setHeader("Recordings")}>
                                Recordings
                            </div>
                        </Link>
                    </div>
                    <div className="music">
                        <Link to="/repertoirelist">
                            <div className="repertoire-component" onClick={() => this.setHeader("Repertoire")}>
                                Repertoire
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





 