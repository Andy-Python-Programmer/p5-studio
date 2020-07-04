#!/usr/bin/env node

// Requires

const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const readline = require('readline');

// Custom Requires

const staticConf = require("./configs/staticConf.js");
const server = require("./server/server.js");

// Rest of code

async function config() {
    const answers = await inquirer
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
        ]);

    switch (answers.type) {
        case "static":
            await staticConf(config, answers.name, process.cwd());
            break;
    }
}

async function main() {
    const existindex = fs.existsSync("index.html");

    // Clean Screen
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);

    if (!existindex) {
        // simply create new project
        await config();
        return;
    }

    // Ask to overtime the file
    const answers = await inquirer
        .prompt([
            {
                type: "confirm",
                name: "overwrite",
                message: "index.html already exists! Would you like to open live server here ?",
                default: false,
            }
        ]);

    if (!answers.overwrite) {
        console.log("Goodbye :)");
        return;
    }

    server(process.cwd());
}

main();