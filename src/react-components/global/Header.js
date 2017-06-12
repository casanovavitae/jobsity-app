import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    onLoginClick(){
        this.props.onLoginClick();
    }

    onLogoutClick(){
        this.props.onLogoutClick();
    }

    render() {
        let navItems;
        if(this.props.idToken){
            navItems = <NavItem onClick={this.onLogoutClick.bind(this)} href="#">Logout</NavItem>
        } else {
            navItems = <NavItem onClick={this.onLoginClick.bind(this)} href="#">Login</NavItem>
        }
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        ReactAuth App
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    {navItems}
                </Nav>
            </Navbar>
        );
    }
}

export default App;
