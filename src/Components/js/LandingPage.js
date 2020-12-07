
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "../css/LandingPage.css";
import Bio from './Biography.js';
import Home from './Home.js';
import Contacts from './Contacts.js';
import Hobbies from './Hobbies.js';
import RepertoireList from './RepertoireList.js';
import Performances from './Performances.js';
import Logo from '../../media/logo.png';
import AnitaKuo from '../../media/AnitaKuo.png';


class LandingPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            headerImage: AnitaKuo
        }
        this.setHeader = this.setHeader.bind(this);
    }

    setHeader(newImage) {
        this.setState({
            headerImage: newImage
        });
    }

    
    render() {
        return (
            <Router>
                <div className="home">
                    <div className="logo-container"> 
                        <Link className="logo" to="/AnitaKuo/"  onClick={() => this.setHeader(AnitaKuo)}>  
                            <div style={{margin: "auto"}}>
                                <img className="logo" style={{height: "10vh", marginTop: "3px"}} src={Logo}/>
                            </div>
                        </Link>
                        <div className="content-header">
                            <img style={{height: "50%", width: "45vw", marginLeft: "100px"}} src={this.state.headerImage}/>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/AnitaKuo/">
                            <Home
                            setHeader={this.setHeader.bind(this)}/>
                        </Route>
                        <Route exact path="/AnitaKuo/bio">
                            <Bio/>
                        </Route>
                        <Route exact path="/AnitaKuo/hobbies">
                            <Hobbies/>
                        </Route>
                        <Route exact path="/AnitaKuo/contacts">
                            <Contacts/>
                        </Route>
                        <Route exact path="/AnitaKuo/performances">
                            <Performances/>
                        </Route>
                        <Route exact path="/AnitaKuo/repertoirelist">
                            <RepertoireList/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default LandingPage;
