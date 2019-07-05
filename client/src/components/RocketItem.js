import React from 'react';
import { Link } from 'react-router-dom';

export default function RocketItem({ rocket: { rocket_id, rocket_name, wikipedia } }) {
    return (
        <div className="card card-body mb-3" key={rocket_id}>
            <div className="row">
                <div className="col-md-9">
                    <h4>{rocket_name}</h4>
                </div>
                <div className="col-md-3">
                    <Link to={`/rocket/${rocket_id}`} className="btn btn-secondary">
                        Rocket Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
