
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
import RepertoireList from './RepertoireList.js';
import Performances from './Performances.js';


class LandingPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            header: 'Anita Kuo'
        }
        this.setHeader = this.setHeader.bind(this);
    }

    setHeader(headerTitle) {
        this.setState({
            header: headerTitle
        });
    }

    
    render() {
        return (
            <Router>
                <div className="home">
                    <div className="logo-container"> 
                        <Link className="logo" to="/AnitaKuo/"  onClick={() => this.setHeader("Anita Kuo")}>  
                            <div>
                                logo
                            </div>
                        </Link>
                        <div className="content-header">
                            {this.state.header}
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
