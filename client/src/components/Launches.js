import React, { Fragment, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { LaunchItem } from './LaunchItem';
import { Pagination } from './Pagination';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export const Launches = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        console.log('component reloaded');
    });

    return (
        <Fragment>
            <div className="card card-header mb-3">
                <h1>Launches</h1>
            </div>
            <input
                type="text"
                value={itemsPerPage}
                placeholder="Items per page"
                onChange={event => setItemsPerPage(event.target.value)}
            />

            <Query query={LAUNCHES_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <h4>Loading...</h4>;
                    if (error) console.log(error);

                    // Get current lunches
                    const currentLauches = data.launches.slice(indexOfFirstItem, indexOfLastItem);

                    return (
                        <Fragment>
                            {currentLauches.map(launch => (
                                <LaunchItem key={launch.flight_number} launch={launch} />
                            ))}
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                totalItems={data.launches.length}
                                paginate={paginate}
                            />
                        </Fragment>
                    );
                }}
            </Query>
        </Fragment>
    );
};

export default Launches;
