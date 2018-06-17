import React from 'react'

import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_CURRENCIES = gql`
  query GetCurrencies {
    rates {
      currency
      rate
    }
  }
`

const ExchangeRatesSelect = (props) => (
  <Query query={GET_CURRENCIES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) {
        console.log(error) 
        return <p>Error :(</p>;
      }

      return (
        <React.Fragment>
          <select name="currency" onChange={props.onChange}>  
            {data.rates.map(({ currency }, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          {/* <div>
            {data.rates.map(({ currency, rate }, index) => (
              <div key={index}>
                <p>{`${currency}: ${rate}`}</p>
              </div>
            ))}
          </div> */}
        </React.Fragment>
      );
    }}
  </Query>
);

ExchangeRatesSelect.defaultProps = { onChange: null };

export default ExchangeRatesSelect