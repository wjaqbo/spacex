import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Launches } from './components/Launches';
import { Launch } from './components/Launch';
import MissionKey from './components/MissionKey';

const client = new ApolloClient({
    uri: '/graphql',
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div className="container">
                        <img
                            src={logo}
                            alt="SpeceX"
                            style={{ width: '200', display: 'block', margin: '20px auto' }}
                        />
                        <div className="row">
                            <div className="col-md-2">
                                <MissionKey />
                            </div>
                            <div className="col-md-10">
                                <Route exact path="/" component={Launches} />
                                <Route exact path="/launch/:flight_number" component={Launch} />
                            </div>
                        </div>
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
