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
    customerNr: String!
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
    creator: User!
  }

  type Product {
    _id: ID!
    productName: String!
    productDescr: String!
    productPrice: Float!
    creator: User!
  }

  type Item {
    _id: ID!
    desiredSchedule: String!
    customer: Customer!
    product: Product!
    comment: String!
  }

  type Order {
    _id: ID!
    orderNr: String!
    items: [Item!]!
    comment: String!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input UserInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  input CustomerInput {
    customerNr: String!
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

  input ProductInput {
    productName: String!
    productDescr: String!
    productPrice: Float!
  }

  type RootQuery {
    customers: [Customer!]!
    products: [Product!]!
    login(email: String!, password: String!): AuthData!
  }

  type RootMutation {
    createUser(userInput: UserInput): User
    createCustomer(customerInput: CustomerInput): Customer
    createProduct(productInput: ProductInput): Product
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
