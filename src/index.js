import React from 'react';
import { render } from 'react-dom'

import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost";

import App from './components/App'

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('main')
);