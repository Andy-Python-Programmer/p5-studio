const fs = require("fs");
const chalk = require("chalk");

async function write(name, path_) {
    try {
        var index = await fs.promises.readFile(`${__dirname}/index.txt`, "utf-8", function(err, data){ 
            console.log("Reading: " + "index.d.ts")
        });
        
        var jsonconf = await fs.promises.readFile(`${__dirname}/jsconfig.txt`, "utf-8", function(err, data){ 
            console.log("Reading: " + "jsconfig.json");
            console.log("\n")
        });
    
        fs.writeFile(`${path_ + "/" + name}/index.d.ts`, index, function (err) {
            if (err)
                throw err;
            console.log(chalk.white.bgCyan("\nAutocomplete:") + chalk.grey(' Created index.d.ts'));
        });
    
        fs.promises.writeFile(`${path_ + "/" + name}/jsconfig.json`, jsonconf, function (err) {
            if (err)
                throw err;
        }).then(() => {
            console.log(chalk.white.bgCyan("Autocomplete:") + chalk.grey(' Created jsconfig.json'));
            console.log(`\nWe suggest that you begin by typing:\n\tcd ${name}\n\tp5-studio serve`);
        });
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = write;