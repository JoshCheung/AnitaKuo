import {Table} from 'reactstrap';
import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import YouTubeGrid from 'react-youtube-grid';


class VideoList extends Component {
    constructor (props) {
        super(props);
    }


    
    render() {
        return (
            <div className="video-component-container">
                <YouTubeGrid style={{overflowX: "none", overflowY: "hidden"}} youtubeUrls={['bTOYZW-_hyc', 'Z2RFIve6nn4', 'WpPm64gvu30', '_R1NYoXBm-g', 'XC8RKPS76ew', 'eMd-aTzzgMQ', 'R1JxLQVI3h4', 'BuTENLfkfLE']} />
            </div>
        );
    }
}

export default VideoList;
