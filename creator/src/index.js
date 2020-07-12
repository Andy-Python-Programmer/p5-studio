#!/usr/bin/env node

/**
 * Create a new project
 * 
 * @param {string} name the name of the project
 * @param {string} [templateName] the name of the template
 */

const yargs = require("yargs");

async function newProject(name, templateName = "static") {
    if (name == undefined) {
        console.log("Name is required");
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

    const autoCompleter = require("./autocomplete.js")

    const chalk = require("chalk");

    await writeTemplate(name, template(name), (fileName) => {
        // after each file get written
        console.log(
            chalk.white.bgCyan("Info:") +
                chalk.grey(` Created ${fileName}`)
        );
    });

    autoCompleter(name, `${process.cwd()}`);
}

function main() {
    // let args = process.argv;

    const argv = yargs
    .command(
        "new <name>",
        "Create a new project",
        (yargs) => {
            yargs.positional("name", {
                describe: "The name of the project",
                demandOption: true,
            })
        },
        (argv) => {
            newProject(argv.name)
            // console.log(argv.name);
        }
    )
    .command(
        "serve",
        "Open liveserver in the current directory :)", () => {
            const server = require("./server/server");
            server(".");
        }
    )
    .help()
    .alias("help", "h")
    .scriptName("p5-studio")
    .argv;
}

main();
