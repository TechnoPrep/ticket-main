import React, { useState, useEffect } from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom';
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
import PageNotFound from  "./pages/404"
// import DropdownTest from './components/DropdownTest';
import Navbar from './components/Nav/Navbar';

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

  const [displayHero, setDisplayHero] = useState(true)

  const [heroImage, setHeroImage] = useState({
    url: null,
    performer: '',
    eventDate: '',
    eventTime: '',
    venue: '',
  })

  const handleUpdate = (newTerm) =>{
    setSearchTerm({term: newTerm})
  }

  const updateHeroImage = (imageUrl, performer, venue, eventDate, eventTime) =>{
    setHeroImage({ url: imageUrl, performer: performer, venue: venue, eventDate: eventDate, eventTime: eventTime });
  }

  const isNotFound = (boolean) => {
    setDisplayHero(boolean)
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="min-100-vh">
          <Navbar displayHero={isNotFound} heroImage={updateHeroImage}/>
          {/* <Header displayHero={isNotFound} heroImage={updateHeroImage} /> */}
          {/* <DropdownSearch searchVal={handleUpdate} /> */}
          {/* <TestMenu /> */}
          <Hero displayHero={displayHero} heroImage={heroImage} />
          <div className="container" >
          <Switch>
            <Route exact path="/">
              <Home heroImage={updateHeroImage} apitokens={apiTokens} />
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
              <UserProfile heroImage={updateHeroImage} />
            </Route>
            <Route exact path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/reset/:token">
              <ResetPassword />
            </Route>
            <Route exact path="/prices/:token">
              <Prices heroImage={updateHeroImage} apitokens={apiTokens}/>
            </Route>
            <Route path="*" >
              <PageNotFound displayHero={isNotFound} />
            </Route>
            </Switch>
          </div>
          <Footer displayHero={isNotFound} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
