import React, { Component } from "react";
import ReactPlayer from 'react-player';
import { Table } from 'reactstrap';

class YoutubePlayerGrid extends Component {
    constructor (props) {
        super(props);
        this.state = {
        
        }
    }
    
    render() {
        return (
            <div>
                <Table style={{tableLayout: "fixed"}}>
                    <tbody>
                        <tr style={{width: "100%"}}>
                            <td>
                                <ReactPlayer url={this.props.videoList[0].url}
                                    height='30vh'
                                    width='22vw'
                                />
                                <div style={{height: "20px", fontSize: "2vh", paddingBottom: "20px", textAlign: "center"}} >
                                    {this.props.videoList[0].title}
                                </div>
                            </td>
                            <td>
                                <ReactPlayer url={this.props.videoList[1].url}
                                    height='30vh'
                                    width='22vw'
                                />
                                <div style={{height: "20px", fontSize: "2vh", paddingBottom: "20px", textAlign: "center"}}>
                                    {this.props.videoList[1].title}
                                </div>
                            </td>
                            <td>
                                <ReactPlayer url={this.props.videoList[2].url}
                                    height='30vh'
                                    width='22vw'
                                />
                                <div style={{height: "20px", fontSize: "2vh", paddingBottom: "20px", textAlign: "center"}}>
                                    {this.props.videoList[2].title}
                                </div>
                            </td>
                        </tr>
                        {/* <tr style={{width: "100%"}}>
                            <td style={{height: "20px", width: "auto", fontSize: "large", paddingBottom: "10px", textAlign: "center", margin: "auto", display: ""}}>{this.props.videoList[0].title}</td>
                            <td style={{height: "20px", fontSize: "large", paddingBottom: "10px", textAlign: "center", margin: "auto", display: ""}}>{this.props.videoList[1].title}</td>
                            <td style={{height: "20px", fontSize: "large", paddingBottom: "10px", textAlign: "center", margin: "auto", display: ""}}>{this.props.videoList[2].title}</td>
                        </tr> */}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default YoutubePlayerGrid;
