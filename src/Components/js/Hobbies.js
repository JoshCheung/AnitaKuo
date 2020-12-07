import React, { Component } from "react";
import VideoList from './VideoList.js'
import Gallery from 'react-photo-gallery';
import "../css/Hobbies.css";
import eggtarts from '../../media/egg-custards.jpg';
import beefdish from '../../media/beef-dish.jpg'
import sourdough from '../../media/sourdough.jpg';
import mantou from '../../media/mantou.jpg';
import pasta from '../../media/fresh-pasta.jpg';
import pie from '../../media/raspberry-pie.jpg';
import sandwich from '../../media/sandwich.jpg';
import cheesecake from '../../media/cheesecake.jpg';
import blacksesamebread from '../../media/black-sesame-loaf.jpg';
import creampuffs from '../../media/creampuffs.jpg';
import creampuff from '../../media/creampuffs-cross-section.jpg';



 
const photos = [
    {
        src: eggtarts,
        width: 3.6,
        height: 4.8
    },
    {
        src: beefdish,
        width: 4.3,
        height: 3.7
    },
    {
        src: sourdough,
        width: 3.4,
        height: 4.5
    },
    {
        src: mantou,
        width: 4.6,
        height: 3
    },
    {
        src: pasta,
        width: 3.5,
        height: 6.3
    },
    {
        src: pie,
        width: 4.7,
        height: 3.5
    },
    {
        src: sandwich,
        width: 3.7,
        height: 5
    },
    {
        src: cheesecake,
        width: 3.8,
        height: 3.1
    },
    {
        src: blacksesamebread,
        width: 2.83,
        height: 3.77
    },
    {
        src: creampuffs,
        width: 4.53,
        height: 3.02
    },
    {
        src: creampuff,
        width: 4.98,
        height: 3.32
    }
      
];
    
   
class Hobbies extends Component {
    constructor (props) {
        super(props);
        this.state = {
        
        }
    }


    
    render() {
        return (
            <div className="hobbies-component-container">
                <div id="hobbies-component" className="grid">
                    <div className="main">
                        <Gallery photos={photos} />
                    </div> 
                </div>
            </div>
        );
    }
}

export default Hobbies;
