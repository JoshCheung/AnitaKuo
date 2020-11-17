import {Table} from 'reactstrap';
import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';


class VideoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoList: ["testing1", "testing2", "testing3", "testing4", "testing5", "testing6", "testing7", "testing8"]
        }
    }


    
    render() {
        return (
            <div style={{height: '100%', paddingLeft: "10px", overflowX: "hidden", overflowY: "auto"}}>
                <Scrollbars style={{height: '100%'}}>
                    <Table borderless style={{width: "100%", borderRadius: "30px"}}>
                        <tbody>
                        {
                        this.state.videoList.map((item, index) =>
                            <tr style={{width: "100%"}} key={index} >
                                <td style={{width: "33%", background: "red", height: "200px", fontSize: "medium", textAlign: "left"}}>
                                    <div className="usernames" style={{color: "#424954"}}>{item}</div>
                                </td>
                                <td style={{width: "33%", background: "green", height: "200px", fontSize: "medium", textAlign: "left"}}>
                                    <div className="usernames" style={{color: "#424954"}}>{item}</div>
                                </td>
                                <td style={{width: "33%", background: "blue", height: "200px", fontSize: "medium", textAlign: "left"}}>
                                    <div className="usernames" style={{color: "#424954"}}>{item}</div>
                                </td>
                            </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Scrollbars>
            </div>
        );
    }
}

export default VideoList;
