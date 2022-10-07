import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <h1 className={'text-warning my-5'}>Welcome to dashboard page !</h1>
                    <Link to={'/cabinet/dashboard/balance'}
                          className={'bg-primary text-white p-2 rounded text-decoration-none'}>Balance</Link>
                </div>
            </div>
        );
    }
}

export default Dashboard;