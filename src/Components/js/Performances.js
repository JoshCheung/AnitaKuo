import React, { Component } from "react";
import VideoList from './VideoList.js'
import "../css/Performances.css";

class Performances extends Component {
    constructor (props) {
        super(props);
        this.state = {
        
        }
    }


    
    render() {
        return (
            <div className="component-container">
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
