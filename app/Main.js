import React from "react";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            authModalOpen:  !this.state.authModalOpen
        });
    }

    render() {
        return (
            <div>
                <button
                onClick={this.toggleModal}>
                        Launch
                </button>
                {
                    this.state.authModalOpen ?
                    <div>auth modal!</div> :
                    null
                }
            </div>
        );
    }
}

export default Main;
