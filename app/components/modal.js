import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


class App extends React.Component {
    constructor(){
        super()

        this.state = {
            isActive:false
        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    toggleModal = () => {
        this.setState({
            isActive:!this.state.isActive
        })

    }

    render(){
        return(
            <section>
                <button onClick={this.toggleModal}>SHOW MODAL</button>
                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                <button onClick={this.toggleModal}>Hide Modal</button>
                </Modal>
            </section>
            )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
