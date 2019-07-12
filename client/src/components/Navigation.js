import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="main-nav">
            <Link to="/launches" className="btn btn-primary mr-3">
                Launches
            </Link>
            <Link to="/rockets" className="btn btn-primary mr-3">
                Rockets
            </Link>
            <Link to="/ships" className="btn btn-primary mr-3">
                Ships
            </Link>
            <Link to="/todos" className="btn btn-primary">
                Todos
            </Link>
        </nav>
    );
};

export default Navigation;
