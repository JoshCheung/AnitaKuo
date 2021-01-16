import React, { Component } from "react";
import VideoList from './VideoList.js'
import "../css/Performances.css";
import Recordings from '../../media/Recordings.png';


class Performances extends Component {
    constructor (props) {
        super(props);
        this.state = {
        
        }
    }


    
    render() {
        return (
            <div className="performances-component-container">
                <div className="banner-title">
                    <img className="name" src={Recordings}/>
                </div>
                <div id="performances-component" className="grid">
                    <div className="main">
                        <div className="picture-component">
                            <VideoList/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Performances;
