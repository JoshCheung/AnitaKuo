import React, { Component } from "react";
import "../css/Biography.css";
import AboutMe from '../../media/AboutMe.png';
import profilePic from '../../media/temp-profile.jpg';
import secondPic from '../../media/secondary-picture.jpg';


class Biography extends Component {
    constructor (props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return (
            <div className="bio-component-container" >
                <div className="banner-about">
                    <img className="name" src={AboutMe}/>
                </div>
                <div id="bio-component" className="grid">
                    <div className="picture-1">
                        <div className="picture-component-1">
                            <img id="primary-pic" src={profilePic}></img> 
                        </div>
                    </div>
                    <div className="picture-2">
                        <div className="picture-component-2">
                            <img id="secondary-pic" src={secondPic}></img> 
                        </div>
                    </div>
                    <div className="textbox-1">
                        <div className="textbox1-component">
                            <p className="text"> hi, I’m Anita! </p>
                            <p className="text">
                                I am a violinist and educator pursuing my BM in Violin Performance 
                                at the Peabody Institute of the Johns Hopkins University, under the tutelage 
                                of Herbert Greenberg. I enjoy working with children and providing my students with 
                                the stable foundation necessary to their budding musical education. 
                            </p>
                            <p className="text">
                                in 2017, I was named winner and the Outstanding gold medalist of the US Open Music Competition, 
                                as well as the second prize winner of the Silicon Valley Music Competition. Under normal circumstances, 
                                I regularly perform with my chamber ensemble, in concert halls as well as hospitals and nursing homes, 
                                where I demonstrate my support for better palliative care in the healthcare system. 
                            </p>
                        </div>
                    </div>
                    <div className="textbox-2">
                        <div className="picture-component">
                            <p className="text"> 
                                when I’m not poring over small black dots on a page, you can find me covered in flour, 
                                developing recipes to healthy treats for my friends and family, or preserving memories 
                                through a camera lens. Furthermore, I often find myself recording popular movie soundtracks 
                                with friends who are just as passionate about those irresistible Disney tunes.
                            </p>
                            <br/>
                            <p className="text"> 
                               let's connect at anitakuo.0328@gmail.com !
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Biography;
