const express = require("express");
const open = require("open");
const chalk = require("chalk");
const path = require("path");

function run_server(path_dir, port = 3000) {
    const app = express();
    
    app.use(express.static(path_dir));

    app.listen(port, () => {
        console.log(
            "\nRunning Server: " +
                chalk.underline.blueBright(`http://localhost:${port}`)
        );
        open(`http://localhost:${port}`);
    });

}

module.exports = run_server;
