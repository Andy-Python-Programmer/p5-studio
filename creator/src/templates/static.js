module.exports = name => ({
    // =============== index.html ==============
    "index.html": `<!DOCTYPE html>
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
`,

    // =============== sketch.js ==============
    "sketch.js": `function setup() {
    createCanvas(400, 400);
};

function draw() {
    background(0);
};
`,
    // =============== style.css ==============
    "style.css": `body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: black;
}
`
})