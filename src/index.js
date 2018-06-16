import React from 'react';
import { render } from 'react-dom'

import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost";

import styles from 'Styles/main.scss'

import mockClient from 'Src/mockClient'

import App from './components/App'

// const client = new ApolloClient({
//   uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
// })

const client = mockClient


render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('main')
);