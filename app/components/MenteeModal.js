import React from 'react'; //import React, { Component } from 'react';//
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './header';
import Home from './home';


class MenteeModal extends React.Component {      
    componentWillMount() {
        this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
        Modal.setAppElement('body');

        //on authentication
        this.lock.on('authenticated', (authResult) => {
            console.log(authResult);
        });
    }

    toggleModal(evt) {
        if (evt) evt.preventDefault();

        this.setState({
            isActive: !this.state.isActive
        });
    }               

        

        showLock() {
            this.lock.show();
        }

    rendernoAuth() {
        return(
            <div>
                <Header onLoginClick={this.showLock.bind(this)} />
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <Home />
                        </Col>
                    </Row>
                </Grid>
                <button onClick={this.props.toggleModal}>Hide
                
                </button> 
                <button onClick={this.props.setAuth}>quiz
                
                </button> 
            </div>                     
            ) 
    }  

    renderquiz() {
        return(
            <div id="container">
                <header>
                    <h1>Mentee Quiz</h1>
                </header>
                <section>
                    <div id="results"></div>
                    <form className="quizForm" onsubmit="return submitAnswers()">
                        <h3>1. What is node.js?</h3>
                        <input type="radio" className="q1" value="a" id="q1a" />a.web server<br /> 
                        <input type="radio" className="q1" value="b" id="q2a" />b.JavaScript based framework<br />
                        <input type="radio" className="q1" value="c" id="q3a" />c.Java based framework<br />
                        <input type="radio" className="q1" value="d" id="q4a" />d.None of the Above<br />

                        <h3>2. What is a callback?</h3>
                        <input type="radio" className="q2" value="a" id="q1a" />a.Asynchronous eqiv to a function<br /> 
                        <input type="radio" className="q2" value="b" id="q2a" />b.Method calls back the caller method<br />
                        <input type="radio" className="q2" value="c" id="q3a" />c.Both of the above<br />
                        <input type="radio" className="q2" value="d" id="q4a" />d.None of the Above<br />

                        <h3>3. Node.js is a single threaded application but supports concurrency?</h3>
                        <input type="radio" className="q3" value="a" id="q1a" />a.true<br /> 
                        <input type="radio" className="q3" value="b" id="q2a" />b.false<br />
                        

                        <h3>4. Which of the following is true about _dirname global object ?</h3>
                        <input type="radio" className="q4" value="a" id="q1a" />a.name of directory for currently executing script<br /> 
                        <input type="radio" className="q4" value="b" id="q2a" />b.represents the resolved absolute path of code file<br />
                        <input type="radio" className="q4" value="c" id="q3a" />c.Both of the Above<br />
                        <input type="radio" className="q4" value="d" id="q4a" />d.None of the Above<br />

                        <h3>5. Which of the following is the correct way to get an absolute path?</h3>
                        <input type="radio" className="q5" value="a" id="q1a" />a.os.resolve('main.js')<br /> 
                        <input type="radio" className="q5" value="b" id="q2a" />b.path.resolve('main.js')<br />
                        <input type="radio" className="q5" value="c" id="q3a" />c.fs.resolve('main.js')<br />
                        <input type="radio" className="q5" value="d" id="q4a" />d.None of the Above<br />
                        <br /><br />
                        <input type="submit" value="Submit Answers" />
                    </form>
                </section>
            </div>
            )
    }  
        

    render(){
        // two variables that just hold html
        // this html is returned by the methods above
        var unAuth = this.rendernoAuth() 
        var quiz = this.renderquiz()
        return (
          <div>
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.toggleModal}
                contentLabel="Modal!">
                {/* now we have a conditional render! */}
                {/* isThisValueTrue ? ifYesDoThis : OtherwiseDoThis */}
                {/* if this.props.isAuth, render quiz, otherwise unAuth */}
                {this.props.isAuth ? quiz : unAuth}
            </Modal>

            
          </div>
        );
    }
}


MenteeModal.defaultProps = {
            clientId: 'ofVihEf0O4cOZWHVoXBz58PtCWH46Tse',
            domain: 'riley272.auth0.com'
        }

export default MenteeModal;
