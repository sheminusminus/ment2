import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


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
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.toggleModal}
                contentLabel="Modal!">
                <button onClick={this.props.toggleModal}>Hide</button>
            </Modal>
        );
    }
}

export default MenteeModal;
