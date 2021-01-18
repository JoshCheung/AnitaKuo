import React, { Component } from "react";
import Gallery from 'react-photo-gallery';
import "../css/Lessons.css";
import eggtarts from '../../media/egg-custards.jpg';
import mantou from '../../media/mantou.jpg';

import Hobbies2 from '../../media/Hobbies2.png';
 

   
class Lessons extends Component {
    constructor (props) {
        super(props);
        this.state = {
        
        }
    }
    
    render() {
        return (
            <div className="lessons-component-container">
                <div className="banner-title-2">
                    <img className="name" src={Hobbies2} id={this.props.id}/>
                </div>
                <div id="lessons-component" className="grid">
                    <div className="l-text">
                        <p className="lesson-text">
                            Description
                        </p>
                    </div> 
                    <div className="l-picture">
                        <img src={mantou}/>
                    </div> 
                    <div className="l-contact">
                        <p className="lesson-text" style={{margin: "auto", marginTop: "auto"}}>
                            Contact Information
                        </p>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Lessons;
