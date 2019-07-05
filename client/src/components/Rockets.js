import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RocketItem from './RocketItem';

const ROCTETS_QUERY = gql`
    {
        rockets {
            rocket_id
            rocket_name
            rocket_type
            wikipedia
        }
    }
`;

export class Rockets extends Component {
    render() {
        return (
            <Fragment>
                <div className="card card-header mb-3">
                    <h1>Rockets</h1>
                </div>
                <Query query={ROCTETS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);

                        return (
                            <Fragment>
                                {data.rockets.map(rocket => (
                                    <RocketItem key={rocket.rocket_id} rocket={rocket} />
                                ))}
                            </Fragment>
                        );
                    }}
                </Query>
            </Fragment>
        );
    }
}

export default Rockets;
