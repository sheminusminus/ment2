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
            <div>
            hello
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
