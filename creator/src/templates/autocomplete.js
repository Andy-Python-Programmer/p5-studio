const path = require("path");
const { DIR, FILE } = require("../writer");

module.exports = {
    "jsconfig.json": {
        type: FILE,
        path: path.join(__dirname, "files", "jsconfig.json"),
    },

    libs: {
        type: DIR,
        "index.d.ts": {
            type: FILE,
            path: path.join(__dirname, "files", "index.d.ts"),
        },

        "p5.js": {
            type: FILE,
            path: path.join(__dirname, "files", "p5.js"),
        },

        "p5.sound.min.js": {
            type: FILE,
            path: path.join(__dirname, "files", "p5.sound.min.js"),
        },
    },
};
