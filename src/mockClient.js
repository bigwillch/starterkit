import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { typeDefs, mocks } from 'Src/schema';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema, mocks });

const mockClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema })
});

export default mockClient