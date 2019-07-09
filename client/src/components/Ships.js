import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { ShipItem } from './ShipItem';

const SHIPS_QUERY = gql`
    {
        ships {
            ship_id
            ship_name
            image
        }
    }
`;

export const Ships = () => {
    return (
        <Fragment>
            <div className="card card-header mb-3">
                <h1>Ships</h1>
            </div>
            <Query query={SHIPS_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <h4>Loading...</h4>;
                    if (error) console.log(error);

                    return (
                        <Fragment>
                            {data.ships.map(ship => (
                                <ShipItem key={ship.ship_id} ship={ship} />
                            ))}
                        </Fragment>
                    );
                }}
            </Query>
        </Fragment>
    );
};

export default Ships;
