#!/usr/bin/env node

/**
 * Create a new project
 * 
 * @param {string} name the name of the project
 * @param {string} [templateName] the name of the template
 */
async function newProject(name, templateName = "static") {
    if (name == undefined) {
        console.log("name is required");
        return;
    }
    const fs = require("fs");

    if (fs.existsSync(name)) {
        console.log("Directory Already exists");
        return;
    }
    await fs.promises.mkdir(name);

    // if templateName is not "static" just return
    switch (templateName) {
        case "static":
            break;
        default:
            console.log("Invalid template");
            return;
    }

    // SAFETY: since templateName is already checked above
    // this will always be a valid.
    const template = require("./templates/" + templateName);
    const writeTemplate = require("./writer");

    const chalk = require("chalk");
    writeTemplate(name, template(name), (fileName) => {
        // after each file get written
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
