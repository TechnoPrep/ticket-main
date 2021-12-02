import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Results from './pages/Results';
import Confirm from './pages/Confirm'
import UserProfile from './pages/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ForgotPassword from './pages/ForgotPassword'
import DropdownSearch from './components/DropdownSearch';
// import DropdownTest from './components/DropdownTest';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const apiTokens = {
  stubhub: process.env.REACT_APP_SH_BEARER_TOKEN,
  googleapi: process.env.REACT_APP_GAPI_KEY
}


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="min-100-vh">
          <Header />
          <DropdownSearch />
          <Hero />
          <div className="container">
            <Route exact path="/">
              <Home apitokens={apiTokens} />
            </Route>
            <Route exact path="/results">
              <Results apitokens={apiTokens} />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/confirmation/:token">
              <Confirm />
            </Route>
            <Route exact path="/me">
              <UserProfile />
            </Route>
            <Route exact path="/forgottenpassword">
              <ForgotPassword />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
