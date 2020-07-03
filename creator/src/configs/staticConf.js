function static_object(config, name) {
    const baseConfig =
        `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"></script>
        <title>${name}</title>
    </head>
    <body>
        <script src="sketch.js?</script>
    </body>
    </html>
    `;

    return {
        baseConfig,
    }
}

module.exports = static_object;