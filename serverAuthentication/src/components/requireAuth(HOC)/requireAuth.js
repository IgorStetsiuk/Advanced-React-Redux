import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export function requireAuth(WrappedComponent) {
    class Authentication extends Component {

        constructor(props) {
            super(props);

        }

        getAccess() {

            return <WrappedComponent {...this.props}/>
        }

        componentWillUpdate(nextProps){
            if(nextProps.authenticated!==this.props.authenticated){
                this.props.history.push('/');
            }
        }

        render() {
            const {isLoggedIn} = this.props;
            return (
                <div>
                    {isLoggedIn ? this.getAccess() : <Redirect to="/"/>}
                </div>
            )


        }
    }

    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.authenticated
        }
    };

    return connect(mapStateToProps)(Authentication);
}