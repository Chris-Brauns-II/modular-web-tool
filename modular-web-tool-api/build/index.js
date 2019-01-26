"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const graphql_1 = require("graphql");
const http_1 = require("http");
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
var schema = graphql_1.buildSchema(`
  type Query {
    hello: String
  }`);
var root = {
    hello: "Hello World! -from Graphql"
};
const PORT = 5000;
const PORT_WS = 5001;
const HOST = '0.0.0.0';
const app = express();
app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
const server = new http_1.Server(app);
subscriptions_transport_ws_1.SubscriptionServer.create({
    schema,
    execute: graphql_1.execute,
    subscribe: graphql_1.subscribe
}, {
    server,
    path: '/'
});
// app.listen(PORT, HOST)
// console.log(`Running on http://${HOST}:${PORT}`);
server.listen(PORT_WS, () => {
    console.log(`Running WS server on ${HOST}:${PORT_WS}`);
});
//# sourceMappingURL=index.js.map