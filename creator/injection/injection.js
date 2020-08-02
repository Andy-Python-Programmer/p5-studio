const fs = require("fs");
const path = require("path")

async function inject(name, path_) {
    await fs.promises.mkdir(path.join(path_, name, "libs", "console"), function(err){
        if (err)
            throw err;
    })

    var console = await fs.promises.readFile(`${__dirname}/console.js`, "utf-8", function(err, data){ 
        if (err)
            throw err;
    });

    var consoleUtils = await fs.promises.readFile(`${__dirname}/console.util.js`, "utf-8", function(err, data){ 
        if (err)
            throw err;
    });
    

    fs.writeFile(path.join(path_, name, "libs", "console", "console.js"), console, function (err) {
        if (err)
            throw err;
    });

    fs.writeFile(path.join(path_, name, "libs", "console", "console.util.js"), consoleUtils, function (err) {
        if (err)
            throw err;
    });
}

module.exports = inject;