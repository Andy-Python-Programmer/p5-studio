#!/usr/bin/env node

async function newProject(name, templateName = "static") {
    if (name == undefined) {
        console.log("name is required");
        return;
    }
    const fs = require("fs");

    console.log(name)
    if (fs.existsSync(name)) {
        console.log("Directory Already exists");
        return;
    }
    await fs.promises.mkdir(name);

    switch (templateName) {
        case "static":
            break;
        default:
            console.log("Invalid template");
    }

    const template = require("./templates/" + templateName);
    const writeTemplate = require("./writer");

    const chalk = require("chalk");
    writeTemplate(name, template(name), (fileName) => {
        console.log(
            chalk.white.bgCyan("Info:") +
                chalk.greenBright(` Created ${fileName}`)
        );
    });
}

function main() {
    let args = process.argv;
    switch (args[2]) {
        case "new":
            newProject(args[3]);
            break;
        case "serve":
            const server = require("./server/server");
            server(".");
            break;
        default:
            console.log("Command not found");
    }
}

main();
