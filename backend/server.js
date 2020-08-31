const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    cryptoCurrency: CryptoCurrency!
  }

  type CryptoCurrency {
    name: String!
    value: String!
  }

  type Mutation {
    addCryptoCurrency(name: String!, value: String!): ID!
  }
`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    cryptoCurrency: () => ({
      name: "Bitcoin",
      value: "15000.00",
    }),
  },

  Mutation: {
    addCryptoCurrency: (_, {name, value}) => `New ID; ${name}:${value}`
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
