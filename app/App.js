// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
//import routes from "./config/routes";
import Landing from './components/Landing';

class App extends React.Component {
    constructor(props){
        super(props)
        // invent a state value to track whether the user is authenticated
        this.state={
            isAuthenticated: false
        } 
    }

    setAuth() {
        // this function's only job is to flip this value to true
        // (made this in the constructor above)
        this.setState({isAuthenticated:true}) 
    }

    render() {
        // in render, we return the html we want to render --> Landing
        // landing page should know about authentication
        // it should be able to set the authentication also
        // invent some props!
        // isAuthenticated becomes a prop inside the Landing class
        // from Landing --> this.props.isAuthenticated
        return(
            <Landing 
                isAuthenticated={this.state.isAuthenticated} 
                setAuth={this.setAuth.bind(this)} />
        ) 
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));

