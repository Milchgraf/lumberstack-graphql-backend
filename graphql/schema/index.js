const { buildSchema } =  require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  type Customer {
    _id: ID!
    salutation: String!
    firstName: String!
    lastName: String!
    companyName: String
    street: String!
    houseNr: String!
    zip: String!
    city: String!
    country: String!
    mobileNr: String
    phoneNr: String
    email: String
    comment: String
  }

  input UserInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  input CustomerInput {
    salutation: String!
    firstName: String!
    lastName: String!
    companyName: String
    street: String!
    houseNr: String!
    zip: String!
    city: String!
    country: String!
    mobileNr: String
    phoneNr: String
    email: String
    comment: String
  }

  type RootQuery {
    customers: [Customer!]!
  }

  type RootMutation {
    createUser(userInput: UserInput): User
    createCustomer(customerInput: CustomerInput): Customer
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
