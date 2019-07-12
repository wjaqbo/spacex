import React from 'react';
import './App.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import { Launches } from './components/Launches';
import { Rockets } from './components/Rockets';
import { Launch } from './components/Launch';
import { Rocket } from './components/Rocket';
import { Navigation } from './components/Navigation';
import { Ships } from './components/Ships';
import { Todos } from './components/Todos';

const client = new ApolloClient({
    uri: '/graphql',
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <header className="container header">
                    <Link to="/">
                        <img src={logo} alt="SpeceX" style={{ width: '400px', margin: '20px 0' }} />
                    </Link>
                    <Navigation />
                </header>
                <div className="container">
                    <Route exact path="/launches" component={Launches} />
                    <Route exact path="/rockets" component={Rockets} />
                    <Route exact path="/launch/:flight_number" component={Launch} />
                    <Route exact path="/rocket/:rocket_id" component={Rocket} />
                    <Route exact path="/ships" component={Ships} />
                    <Route exact path="/todos" component={Todos} />
                </div>
            </Router>
        </ApolloProvider>
    );
};

export default App;
