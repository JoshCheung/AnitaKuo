import {Table} from 'reactstrap';
import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import YouTubeGrid from 'react-youtube-grid';
import YoutubePlayerGrid from './YoutubePlayerGrid.js';

const videoList1 = [
    {
        url: "https://www.youtube.com/watch?v=Z2RFIve6nn4",
        title: "Bach Sonata no.2, Allegro"
    },
    {
        url: "https://www.youtube.com/watch?v=bTOYZW-_hyc",
        title: "Bach Sonata no.2, Andante"
    },
    {
        url: "https://www.youtube.com/watch?v=WpPm64gvu30",
        title: "Tchaikovsky Violin Concerto in D Major, mvt.1"
    }
]

const videoList2 = [
    {
        url: "https://www.youtube.com/watch?v=_R1NYoXBm-g",
        title: "Dvorak excerpt"
    },
    {
        url: "https://www.youtube.com/watch?v=XC8RKPS76ew",
        title: "Beethoven excerpt 1"
    },
    {
        url: "https://www.youtube.com/watch?v=eMd-aTzzgMQ",
        title: "Mozart excerpt"
    }
]

const videoList3 = [
    {
        url: "https://www.youtube.com/watch?v=R1JxLQVI3h4",
        title: "Beethoven Excerpt 2"
    },
    {
        url: "https://www.youtube.com/watch?v=BuTENLfkfLE",
        title: "Rode caprice no.4"
    },
    {
        url: "",
        title: ""
    }
]


class VideoList extends Component {
    constructor (props) {
        super(props);
    }


    
    render() {
        return (
            <div className="video-component-container">
                <YoutubePlayerGrid style={{overflowX: "hidden", overflowY: "hidden"}}
                    videoList={videoList1}
                />
                <YoutubePlayerGrid style={{overflowX: "hidden", overflowY: "hidden"}}
                    videoList={videoList2}
                />
                <YoutubePlayerGrid style={{overflowX: "hidden", overflowY: "hidden"}}
                    videoList={videoList3}
                />
                {/* <YouTubeGrid style={{overflowX: "hidden", overflowY: "hidden"}} youtubeUrls={['bTOYZW-_hyc', 'Z2RFIve6nn4', 'WpPm64gvu30', '_R1NYoXBm-g', 'XC8RKPS76ew', 'eMd-aTzzgMQ', 'R1JxLQVI3h4', 'BuTENLfkfLE']} /> */}
            </div>
        );
    }
}

export default VideoList;
