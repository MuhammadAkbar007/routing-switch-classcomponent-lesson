import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Cabinet extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <h1 className={'my-5 text-muted'}>Welcome your personal Cabin</h1>
                    <Link to={'/cabinet/settings'}
                          className={'bg-warning text-white p-2 rounded text-decoration-none'}>Cabinet Settings</Link>
                    <Link to={'/cabinet/dashboard'}
                          className={'bg-success mx-5 text-white p-2 rounded text-decoration-none'}>Dashboard</Link>
                </div>
            </div>
        );
    }
}

export default Cabinet;