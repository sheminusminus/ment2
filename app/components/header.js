import React, { Component } from 'react';
import { Nav, NavItem} from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';

class Header extends Component {
    onLoginClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                      MENTOR-CONNECTION
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick={this.onLoginClick.bind(this)} href="#">Login</NavItem>
                </Nav>
            </Navbar>
           );                   
    }
}

export default Header