import React, { Component } from "react";
import Gallery from 'react-photo-gallery';
import "../css/Lessons.css";
import eggtarts from '../../media/egg-custards.jpg';
import mantou from '../../media/mantou.jpg';
import emailjs from "emailjs-com";

import lessons from '../../media/Lessons.png';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

 

   
class Lessons extends Component {
    constructor (props) {
        super(props);
        this.state = {
            subject: '',
            name: '',
            email: '',
            message: ''
        }
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubjectChange(e) {
        this.setState({
            subject: e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleMessageChange(e) {
        this.setState({
            message: e.target.value
        });

    }

    handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_93y500i', e.target, 'user_5sUyV2skLxSwfjfrYxfeZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }
    
    render() {
        return (
            <div className="lessons-component-container">
                <div className="banner-title-2">
                    <img className="name" src={lessons} id={this.props.id}/>
                </div>
                <div id="lessons-component" className="grid">
                    <div className="l-text">
                        <div className="lesson-text">
                            I enjoy working with children and providing my students with the stable foundation necessary for their budding musical educations. 
                        </div>
                        <div className="lesson-text">
                            I teach all ages 6 and above, from beginners to advanced violinists who are looking for someone to further their classical training.
                        </div>
                    </div> 
                    <div className="l-picture">
                        <img className="lesson-picture" src={mantou}/>
                    </div> 
                    <div className="l-contact">
                        <div className="lesson-text">
                            {/* <Label for="exampleEmail">Email</Label> */}
                            <Form
                                onSubmit={this.handleSubmit}>
                                <Input 
                                    onChange={this.handleNameChange} 
                                    value={this.state.name} 
                                    name="name"
                                    className="contact-input"
                                    placeholder="Name" 
                                    />
                                <Input 
                                    onChange={this.handleEmailChange} 
                                    value={this.state.email} 
                                    name="email"
                                    className="contact-input"
                                    placeholder="Email" 
                                    />
               
                                <Input 
                                    onChange={this.handleSubjectChange} 
                                    value={this.state.subject}
                                    name="subject"
                                    className="contact-input"
                                    placeholder="Subject" 
                                    />
                             
                                <Input 
                                    onChange={this.handleMessageChange} 
                                    value={this.state.message} 
                                    name="message"
                                    className="message-input"
                                    type="textarea" placeholder="Message"/>
                                <Button 
                                    onSubmit={this.handleSubmit} 
                                    className="submission">Submit</Button>
                            </Form>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Lessons;
