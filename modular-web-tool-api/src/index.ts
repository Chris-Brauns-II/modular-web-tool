import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import {graphql, buildSchema} from 'graphql'

var schema = buildSchema(`
  type Query {
    hello: String
  }`);

var root = {
  hello: "Hello World!"
};

const PORT = 5000
const HOST = '0.0.0.0'

const app = express();

app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`);
