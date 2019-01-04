const express = require('express');
const bodyParser = require('body-parser');
const graphQlHttp = require('express-graphql');
const mongoose = require('mongoose');
const isAuth = require('./middleware/is-auth.middleware');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');


const app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.use('/graphql', graphQlHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
}));

mongoose.connect(
  'mongodb+srv://jasper:ZszFEubG2dXvK30S@cluster0-rtf4c.mongodb.net/ls-graphql?retryWrites=true',
  { useNewUrlParser: true }
).then(() => {
  app.listen(3000, () => {
    console.log('Server listening on Port 3000 and connected to mongodb..');
  });
}).catch((error) => {
  console.log(error);
});