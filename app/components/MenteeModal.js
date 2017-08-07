import React from 'react'; //import React, { Component } from 'react';//
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from './header';
import Home from './home';

// why is this imported?
import Landing from './Landing';


class MenteeModal extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            showQuiz: false,
            chosenTopic: null
        };
        this.chooseNode = this.chooseNode.bind(this);
        this.displayQuiz = this.displayQuiz.bind(this);
    }

    componentWillMount() {
        this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
        Modal.setAppElement('body');

        //on authentication
        this.lock.on('authenticated', (authResult) => {
            console.log(authResult);
        });
    }            

    showLock() {
        this.lock.show();
    }


    chooseNode() {
        this.setState({
            chosenTopic: 'NODE'
        });
        this.displayQuiz();
    }

    displayQuiz() {
        this.setState({
            showQuiz: true
        });
    }

    submitAnswers() {
        var total = 5;
        var score = 0;

        //Get user input
        var q1 = document.forms["quizForm"][q1].value;
        var q2 = document.forms["quizForm"][q2].value;
        var q3 = document.forms["quizForm"][q3].value;
        var q4 = document.forms["quizForm"][q4].value;
        var q5 = document.forms["quizForm"][q5].value;

        //Validation
        for(i = 1; i <= total;i++) {
            if(eval ('q'+i) == null || eval ('q'+i) == ' ') {
                alert('You missed question ' + i);
                return false;
            }

        }
        //Set correct answers
        var answers = ["b","a","a","b","b"];
        //Check Answers
        for(i = 1; i <= total;i++) {
            if(eval('q'+i) == answers[i-1]) {
                score++;
            }
        } 
        //Display Results
        var results = document.getElementById('results');
        results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
        alert('You scored '+score+' out of '+total);

        return false;
    }

    renderChoices() {
        return(
            <div>
                Choices
                <br/>
                <button onClick={this.chooseNode}>
                    Node
                </button>
            </div>                     
        );
    }

    renderQuiz() {
        if (this.state.chosenTopic === 'NODE') {
            return (
                <div id="container">
                    <header>
                        <h1>Mentee Node Quiz</h1>
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
            );
        }
    }  
        

    render(){
        // two variables that just hold html
        // this html is returned by the methods above
        var choices = this.renderChoices();
        var quiz = this.renderQuiz();

        return (
          <div>
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.toggleModal}
                contentLabel="Modal!">
                {/* now we have a conditional render! */}
                {/* isThisValueTrue ? ifYesDoThis : OtherwiseDoThis */}
                {/* if this.props.isAuth, render quiz, otherwise unAuth */}
                {this.state.showQuiz ? quiz : choices}
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
