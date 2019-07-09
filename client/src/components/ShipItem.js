import React from 'react';
// import { Link } from 'react-router-dom';

export const ShipItem = ({ ship: { ship_id, ship_name, image } }) => {
    return (
        <div className="card card-body mb-3" key={ship_id}>
            <h4>{ship_name}</h4>
            <img src={image} alt={ship_name} className="img-responsive" />
        </div>
    );
};

export default ShipItem;
