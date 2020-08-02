const { TEXT } = require("../writer");

module.exports = (name) => ({
    // =============== index.html ==============
    "index.html": {
        type: TEXT,
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="libs/p5.js"></script>
    <script src="libs/p5.sound.min.js"></script>

    <!-- These files are required for inbuilt console -->

    <script src="./libs/console/console.util.js"></script>
    <script src="./libs/console/console.js"></script>

    <link rel="stylesheet" type="text/css" href="style.css">
    <title>${name}</title>
</head>
<body>
    <script src="sketch.js"></script>
</body>
</html>
`,
    },

    // =============== sketch.js ==============
    "sketch.js": {
        type: TEXT,
        content: `function setup() {
    createCanvas(400, 400);
};

function draw() {
    background(0);
};
`,
    },
    // =============== style.css ==============
    "style.css": {
        type: TEXT,
        content: `body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: black;
}
`,
    },
});
