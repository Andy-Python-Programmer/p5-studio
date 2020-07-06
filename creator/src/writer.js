const fs = require("fs");
const path = require("path");

/**
 * @param {string} basePath
 * the base path to write project to
 *
 * @param {object} template
 * the template to use
 *
 * @param {(fileName: string) => void} afterFileWritten
 * this function will called for each
 * file when it gets written to disk
 */
async function writeTemplate(basePath, template, afterFileWritten) {
    const promises = [];

    for (const fileName in template) {
        const promise = fs.promises
            .writeFile(path.join(basePath, fileName), template[fileName])
            .then(() => afterFileWritten(fileName));

        promises.push(promise);
    }

    await Promise.all(promises);
}

module.exports = writeTemplate;
