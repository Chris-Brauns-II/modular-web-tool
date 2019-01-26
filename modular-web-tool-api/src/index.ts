import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import {execute, graphql, buildSchema, GraphQLSchema, subscribe} from 'graphql'
import { Server } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";

var schema: GraphQLSchema = buildSchema(`
  type Query {
    hello: String
  }`);

var root = {
  hello: "Hello World! -from Graphql"
};

const PORT: number = 5000;
const PORT_WS: number = 5001;
const HOST: string = '0.0.0.0';

const app = express();

app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const server: Server = new Server(app);

SubscriptionServer.create({
  schema,
  execute,
  subscribe
}, {
  server,
  path: '/'
});

// app.listen(PORT, HOST)
// console.log(`Running on http://${HOST}:${PORT}`);

server.listen(PORT_WS, () => {
  console.log(`Running WS server on ${HOST}:${PORT_WS}`);
  
})
