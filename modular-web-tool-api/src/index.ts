import * as express from 'express'
import {graphql, buildSchema} from 'graphql'

var schema = buildSchema(`
  type Query {
    hello: String
  }`);

var root = {
  hello: () => {return "Hello World";}
};

const PORT = 5000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
  var result = graphql(schema, '{ hello }', root).then((result) => {
    res.send(result);
  }); 
});

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`);
