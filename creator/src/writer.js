const fs = require("fs");
const path = require("path");

const TEXT = 0;
const FILE = 1;
const DIR = 2;

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
    for (const key in template) {
        const obj = template[key];
        const name = path.join(basePath, key);

        let promise;

        switch (obj.type) {
            case TEXT:
                promise = fs.promises.writeFile(name, obj.content);
                break;
            case FILE:
                promise = fs.promises.copyFile(obj.path, name);
                break;
            case DIR:
                await fs.promises.mkdir(name);

                // delete type so that it doesn't create a file "type"
                delete obj.type;

                promise = writeTemplate(name, obj, afterFileWritten);
                break;
            default:
                throw "Invalid Type Found";
        }

        promise.then(() => afterFileWritten(key));
        promises.push(promise);
    }

    await Promise.all(promises);
}

module.exports = {
    TEXT,
    FILE,
    DIR,
    writeTemplate,
};
