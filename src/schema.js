export const typeDefs = `
  type Query {
    rates(currency: String!): [ExchangeRate]
  }

	type ExchangeRate {
		currency: String
		rate: String
		name: String
	}
`

export const mocks = {
  Query: {
    rates: (currency) => (
     [
       { currency: "EX1", rate: 6.66 },
       { currency: "EX2", rate: 4.56 }
     ] 
    )
  },
  // ExchangeRate: {
  //   name: async ({ currency }) => {
  //     try {
  //       const results = await fetch('https://api.coinbase.com/v2/currencies')
  //       const currencyData = await results.json()

  //       const currencyInfo = currencyData.data.find(c => c.id.toUpperCase() === currency)
  //       return currencyInfo ? currencyInfo.name : null
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }
  // }
}
