import { MockList } from 'graphql-tools';
import casual from 'casual-browserify'

casual.seed(123);

export const typeDefs = `
  type Query {
    rates(currency: String): [ExchangeRate]
  }

	type ExchangeRate {
		currency: String
		rate: Float
		name: String
	}
`

export const mocks = {
  Query: () => ({
    rates: (root, { currency }) => new MockList(casual.integer(20,50))
  }),
  ExchangeRate: () => ({
    currency: casual.currency_code,
    rate: casual.random.toFixed(2),
    name: casual.currency_name
  })
}
