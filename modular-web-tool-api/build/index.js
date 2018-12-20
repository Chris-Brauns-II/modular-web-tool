"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const graphql_1 = require("graphql");
var schema = graphql_1.buildSchema(`
  type Query {
    hello: String
  }`);
var root = {
    hello: "Hello World!"
};
const PORT = 5000;
const HOST = '0.0.0.0';
const app = express();
app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
//# sourceMappingURL=index.js.map