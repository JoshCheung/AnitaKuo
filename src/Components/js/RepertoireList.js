import React, { Component } from "react";
import "../css/RepertoireList.css";
import List from './List.js';
import Pdf from '../../media/Anita-Kuo-2020-Resume.pdf';


class RepertoireList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            concerto: ["Bach Violin Concerto in E Major","Bruch Scottish Fantasy in E♭ Major *","Conus Violin Concerto *","Lalo Symphonie Espagnole in d minor *","Mendelssohn Violin Concerto in e minor","Mozart Violin Concerto no.4 in D Major *","Saint-Saens Violin Concerto no. 3 in b minor","Sarasate Introduction et Tarentelle *","Sarasate Zigeunerweisen Gypsy Airs *","Tchaikovsky Violin Concerto in D Major *","Vieuxtemps Violin Concerto no. 5 *","Vitali Chaconne in g minor *","Wieniawski Violin Concerto no.2"],
            solo: ["Bach Partita no.1 in b minor - Double","Bach Partita no.2 in d minor *","Bach Partita no. 3 in E Major *","Bach Sonata no. 1 in g minor ","Bach Sonata no. 2 in a minor","Paganini Caprice no. 5","Paganini Caprice no. 13","Paganini Caprice no. 14","Paganini Caprice no. 16","Paganini Caprice no. 20 *","Paganini Caprice no. 24","Rode Caprice 1 - 8","Ysaye Sonata no. 3 *","Ysaye Sonata no. 4"],
            sonata: ["Beethoven Sonata no. 5 *", "Brahms A Major Sonata"],
            chamber: ["Mendelssohn String Quartet no. 2 in a minor *", "Mendelssohn Piano Trio no. 1 in d minor *"]
        }
    }


    
    render() {
        return (
            <div className="rep-component-container">
                {/* <div style={{fontSize: "72px"}}>Repertoire List</div> */}
                <div id="repertoire-component" className="grid">
                    <div className="resume-button-container">
                        <div>
                            <a className = "Button" href = {Pdf}>
                                <a className="resume-text" href = {Pdf}>Résumé</a>
                            </a>
                        </div>
                    </div>
                    <div className="performed-text-container">
                        <div>
                            <div className="performed-text">Performed *</div>  
                        </div>
                    </div>
                   
                    <div className="concerto">
                        <div className="rep-container-component">
                            Concerto
                            <List 
                                list={this.state.concerto}/>
                        </div>
                    </div>
                    <div className="solo">
                        <div className="rep-container-component">
                            Solo
                            <List 
                                list={this.state.solo}/>
                        </div>
                    </div>
                    <div className="sonata">
                        <div className="rep-container-component">
                            Sonata
                            <List 
                                list={this.state.sonata}/>
                        </div>
                    </div>
                    <div className="chamber">
                        <div className="rep-container-component">
                            Chamber
                            <List 
                                list={this.state.chamber}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RepertoireList;
