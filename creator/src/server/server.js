const express = require("express");
const open = require("open");
const chalk = require("chalk");
const socket = require("socket.io");

function run_server(path_dir, port = 3000) {
    const app = express();
    
    app.use(express.static(path_dir));

    var server = app.listen(port, () => {
        console.log(
            "\nRunning Server: " +
                chalk.underline.blueBright(`http://localhost:${port}`)
        );
        open(`http://localhost:${port}`);
    });

    var io = socket(server)

    io.on("connection", function(socket){
        console.log("New Console:")
        socket.on("console", function(data){
            console.log(data)
        })
    })
}

module.exports = run_server;
