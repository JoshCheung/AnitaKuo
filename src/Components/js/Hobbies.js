import React, { Component } from "react";
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
import Hobbies2 from '../../media/Hobbies2.png';
import pic_21 from '../../media/21.jpg';
import pic_20 from '../../media/20.jpg';
import pic_19 from '../../media/19.jpg';
import pic_18 from '../../media/18.jpg';
import pic_17 from '../../media/17.jpg';
import pic_16 from '../../media/16.jpg';
import pic_15 from '../../media/15.jpg';
import pic_14 from '../../media/14.jpg';
import pic_13 from '../../media/13.jpg';
import pic_12 from '../../media/12.jpg';
import pic_11 from '../../media/11.jpg';
import pic_10 from '../../media/10.jpg';
import pic_9 from '../../media/9.jpg';
import pic_8 from '../../media/8.jpg';
import pic_7 from '../../media/7.jpg';
import pic_6 from '../../media/6.jpg';
import pic_5 from '../../media/5.jpg';
import pic_4 from '../../media/4.jpg';
import pic_3 from '../../media/3.jpg';
import pic_2 from '../../media/2.jpg';
import pic_1 from '../../media/1.jpg';


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
    },
    {
        src: pic_1,
        width: 4.1,
        height: 2.7
    },
    {
        src: pic_2,
        width: 1.4,
        height: 0.9
    },
    {
        src: pic_3,
        width: 4.1,
        height: 2.7
    },
    {
        src: pic_4,
        width: 4.1,
        height: 2.7
    },
    {
        src: pic_5,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_6,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_7,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_8,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_9,
         width: 1.4,
        height: 0.9
    },
    {
        src: pic_10,
         width: 1.4,
        height: 0.95
    },
    {
        src: pic_11,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_12,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_13,
         width: 1.4,
        height: 0.96
    },
    {
        src: pic_14,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_15,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_16,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_17,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_18,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_19,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_20,
         width: 4.1,
        height: 2.7
    },
    {
        src: pic_21,
         width: 4.1,
        height: 2.7
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
                <div className="banner-title-2">
                    <img className="name" src={Hobbies2}/>
                </div>
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
