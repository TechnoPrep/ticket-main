import React, { useState } from 'react';

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
import Confirm from './pages/Confirm'
import UserProfile from './pages/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import DropdownSearch from './components/DropdownSearch';
import TestMenu from './components/TestMenu';
import Prices from "./pages/Prices"
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
  googleapi: process.env.REACT_APP_GAPI_KEY,
  ticketmaster: process.env.REACT_APP_TM_API_KEY,
  seatgeek: process.env.REACT_APP_SG_API_KEY
}


function App() {

  const [searchTerm, setSearchTerm] = useState({
    term: '',
  })

  const handleUpdate = (newTerm) =>{
    console.log('App.js',newTerm);
    setSearchTerm({term: newTerm})
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="min-100-vh">
          <Header />
          {/* <DropdownSearch searchVal={handleUpdate} /> */}
          <TestMenu />
          <Hero />
          <div className="containter" >
            <Route exact path="/">
              <Home apitokens={apiTokens} />
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
            <Route exact path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/reset/:token">
              <ResetPassword />
            </Route>
            <Route exact path="/prices/:token">
              <Prices apitokens={apiTokens}/>
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
