// Requires

var inquirer = require('inquirer');
var fs = require("fs");
var path = require("path");
const readline = require('readline')

// Custom Requires

const staticConf = require("./configs/staticConf.js");

const existindex = fs.existsSync("index.html");

// Clean Screen

const blank = '\n'.repeat(process.stdout.rows);

console.log(blank);

readline.cursorTo(process.stdout, 0, 0);
readline.clearScreenDown(process.stdout);

// Rest of code

function config() {
    inquirer
    .prompt([
        {
            type: "text",
            name: "name",
            message: "What is the name of the project ?",
            default: path.basename(process.cwd()),
        },
        {
            type: "list",
            name: "type",
            message: "Do you want to integrate node.js with the p5.js app ?",
            choices: [
                "static",
                "node"
            ]
        }
    ])
    .then(answers => {
        config.name = answers.name;

        switch(answers.type) {
            case "static":
                config = staticConf(config, answers.name);
                break;
        }
        console.log(config);
    })
}

if (existindex) {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "overwrite",
                message: "index.html already exists! Would you like to overwrite it ?",
                default: false,
            }
        ])
        .then(answers => {
            if (answers.overwrite) {
                config();
            } else{
                console.log("Goodbye :)")
            }
        })
} 
else{
    config();
}