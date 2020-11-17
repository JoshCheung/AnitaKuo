import React, { Component } from "react";
import { Icon, InlineIcon } from '@iconify/react';
import gmailIcon from '@iconify/icons-mdi/gmail';
import instagramIcon from '@iconify/icons-fa-brands/instagram';
import handshakeO from '@iconify/icons-fa/handshake-o';
import facebookIcon from '@iconify/icons-cib/facebook';

import "../css/Contacts.css";

class Contacts extends Component {
    constructor (props) {
        super(props);
        this.state = {
        
        }
    }


    
    render() {
        return (
            <div className="contact-component-container">
                <div id="contacts-component" className="grid">
                    <div className="picture-1">
                        <div className="picture-component">
                            <a href="https://www.instagram.com/anitakuooo/">
                                <Icon icon={instagramIcon}
                                style={{fontSize: "500%", color: "gray", cursor: "pointer",  height: "100%"}}/> 
                            </a>
                        </div>
                    </div>
                    <div className="picture-2">
                        <div className="picture-component">
                            <a href="">
                                <Icon icon={handshakeO}
                                style={{fontSize: "500%", color: "gray", cursor: "pointer",  height: "100%"}}/> 
                            </a>
                        </div>
                    </div>
                    <div className="textbox-1">
                        <div className="picture-component">
                            <a href="https://www.facebook.com/anita.kuo.9638/">
                            <Icon icon={facebookIcon}
                            style={{fontSize: "500%", color: "gray", cursor: "pointer",  height: "100%"}}/> 
                            </a>
                        </div>
                    </div>
                    <div className="textbox-2">
                        <div className="picture-component">
                            <a href="">
                            <Icon icon={gmailIcon}
                            style={{fontSize: "500%", color: "gray", cursor: "pointer",  height: "100%"}}/> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;
