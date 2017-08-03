import React from 'react'; //import React, { Component } from 'react';//
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './header';
import Home from './home';


class MenteeModal extends React.Component {
    componentWillMount() {
        Modal.setAppElement('body');
    }

    toggleModal(evt) {
        if (evt) evt.preventDefault();

        this.setState({
            isActive: !this.state.isActive
        });
    }

    render(){
        return (
          <div>
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.toggleModal}
                contentLabel="Modal!">

                <Header />
                <Home />
                <button onClick={this.props.toggleModal}>Hide
                
                </button>                         
            </Modal>

            
          </div>
        );
    }
}

export default MenteeModal;
