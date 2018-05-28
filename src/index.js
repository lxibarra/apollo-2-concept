import React from 'react';
import ReactDOM from 'react-dom';
// Apollo client
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
// <------------ 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'https://kqpqx5nw37.lp.gql.zone/graphql'
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
