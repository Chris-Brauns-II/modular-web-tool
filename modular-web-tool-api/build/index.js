"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PORT = 5000;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!!\n');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
//# sourceMappingURL=index.js.map