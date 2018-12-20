"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphql_1 = require("graphql");
var schema = graphql_1.buildSchema(`
  type Query {
    hello: String
  }`);
var root = {
    hello: () => { return "Hello World"; }
};
const PORT = 5000;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
    var result = graphql_1.graphql(schema, '{ hello }', root).then((result) => {
        // return result;
        res.send(result);
    });
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
//# sourceMappingURL=index.js.map