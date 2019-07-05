import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/rockets" className="btn btn-primary mr-3">
                    Rockets
                </Link>
                <Link to="/launches" className="btn btn-primary">
                    Launches
                </Link>
            </div>
        );
    }
}

export default Navigation;
