import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom';
import {Button} from "../button/button";


export class Header extends Component {

    authButton() {
        debugger;
        const {authenticated} = this.props;

        if (authenticated) {
            return <Button onClick={() => this.props.authenticate(false)}>Sign Out</Button>;
        }

        return <Button onClick={() => this.props.authenticate(true)}>Sign In</Button>;
    }


    render() {
        const {authenticated} = this.props;


        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/resources">Resources</Link>
                </li>
                <li>
                    {this.authButton()}
                </li>
                {this.props.children}
            </ul>
        );
    }
}