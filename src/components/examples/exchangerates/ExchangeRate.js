import React from 'react'

import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_RATE = gql`
  query GetRate($currency: String!) {
    rates(currency: $currency) {
      rate
    }
  }
`

const ExchangeRate = (props) => (

  <Query 
    query={GET_RATE } 
    variables={{ 
      currency: props.currency 
    }}
  >
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      
      if (data) return (
        <h2>{data.rates[0].rate}</h2>
      );
    }}
  </Query>
);

ExchangeRate.defaultProps = { currency: null };

export default ExchangeRate