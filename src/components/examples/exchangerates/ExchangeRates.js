import React from 'react'

import ExchangeRatesSelect from './ExchangeRatesSelect'
import ExchangeRate from './ExchangeRate'


class ExchangeRates extends React.Component {
  
  state = {
    currency: null 
  };

  selectChange = (e) => {
    this.setState({
      currency: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.currency &&
          <ExchangeRate
            currency={this.state.currency}
          />
        }
        <ExchangeRatesSelect
          onChange={this.selectChange}
        />
      </React.Fragment>
    )
  }
}

export default ExchangeRates