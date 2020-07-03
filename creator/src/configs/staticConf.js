const fs = require("fs")

function static_object(config, name, path_) {
    const baseConfig =
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>${name}</title>
</head>
<body>
    <script src="sketch.js"></script>
</body>
</html>
    `;

    const sketchjs = `function setup() {
    createCanvas(400, 400);       
};

function draw() {
    background(0);
};
    `

    const stylecss = `body{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: black;
    }
    `
    
    fs.appendFile(`${path_}/index.html`, baseConfig, function (err) {
        if (err) throw err;
        console.log('\nCreated index.html');
    });

    fs.appendFile(`${path_}/sketch.js`, sketchjs, function (err) {
        if (err) throw err;
        console.log('Created sketch.js');
    });

    fs.appendFile(`${path_}/style.css`, stylecss, function (err) {
        if (err) throw err;
        console.log('Created style.css');
    });

    return {
        baseConfig
    }
}

module.exports = static_object;