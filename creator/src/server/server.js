const express = require("express");
const open = require('open');
const chalk = require('chalk');


function run_server(path_dir, port = 3000) {
    const app = express();
    const server = app.listen(port);

    console.log("\nRunning Server: " + chalk.underline.blueBright(`http://localhost:${port}`));

    app.use(express.static(path_dir));

    open(`http://localhost:${port}`);
}

module.exports = run_server;