const express = require("express");
const open = require('open');

const port = 3000;

function run_server(path_dir) {
    const app = express();
    const server = app.listen(port);

    console.log("\nRunning Server: " + `https://localhost:${port}`);

    app.use(express.static(path_dir));

    open(`http://localhost:${port}`);
}

module.exports = run_server;