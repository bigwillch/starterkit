import React from 'react'

import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_RATES = gql`
  query GetRates {
    rates {
      currency
      rate
      name
    }
  }
`

const ExchangeRates = () => (
  <Query query={GET_RATES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) {
        console.log(error) 
        return <p>Error :(</p>;
      }
      return data.rates.map(({ currency, rate, name }, index) => (
        <div key={index}>
          <p>{`${currency}: ${rate} (${name})`}</p>
        </div>
      ));
    }}
  </Query>
);

export default ExchangeRates