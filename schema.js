const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,
} = require('graphql');
const axios = require('axios');

// Rocket Type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
        wikipedia: { type: GraphQLString },
    }),
});

// Ship Type
const ShipType = new GraphQLObjectType({
    name: 'Ship',
    fields: () => ({
        ship_id: { type: GraphQLString },
        ship_name: { type: GraphQLString },
        image: { type: GraphQLString },
    }),
});

// Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Lunch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType },
    }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve() {
                return axios.get('https://api.spacexdata.com/v3/launches').then(res => res.data);
            },
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt },
            },
            resolve(parent, args) {
                return axios
                    .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res => res.data);
            },
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve() {
                return axios.get('https://api.spacexdata.com/v3/rockets').then(res => res.data);
            },
        },
        rocket: {
            type: RocketType,
            args: {
                rocket_id: { type: GraphQLString },
            },
            resolve(parent, args) {
                return axios
                    .get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
                    .then(res => res.data);
            },
        },
        ships: {
            type: new GraphQLList(ShipType),
            resolve() {
                return axios.get('https://api.spacexdata.com/v3/ships').then(res => res.data);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
