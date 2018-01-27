import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default () => {


    return (
            <div>
                <h2>Super secret spatial resources</h2>
                <ul>
                    <li key="one1">1 Suger</li>
                    <li key="one2">2 Salt</li>
                    <li key="one3">3 Somthing else</li>
                </ul>
                <Link to="/">Back to home page</Link>
            </div>
    );
}