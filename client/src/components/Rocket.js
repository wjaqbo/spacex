import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const ROCKET_QUERY = gql`
    query RocketQuery($rocket_id: String!) {
        rocket(rocket_id: $rocket_id) {
            rocket_id
            rocket_name
            rocket_type
            wikipedia
        }
    }
`;

export class Rocket extends Component {
    render() {
        const { rocket_id } = this.props.match.params;

        return (
            <Fragment>
                <Query query={ROCKET_QUERY} variables={{ rocket_id }}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);

                        const { rocket_name, rocket_type, wikipedia } = data.rocket;

                        return (
                            <div>
                                <h1 className="display-4 my-3">
                                    <span className="text-dark">Rocket name: </span>
                                    {rocket_name}
                                </h1>
                                <ul className="list-group">
                                    <li className="list-group-item">Rocket Type: {rocket_type}</li>
                                    <li className="list-group-item">
                                        <a href={wikipedia} target="_blank">
                                            Wikipedia link
                                        </a>
                                    </li>
                                </ul>
                                <Link to="/rockets" className="btn btn-secondary mt-3">
                                    Back
                                </Link>
                            </div>
                        );
                    }}
                </Query>
            </Fragment>
        );
    }
}

export default Rocket;
