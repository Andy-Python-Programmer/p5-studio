var socket;

console.log("101");

socket = io.connect("http://localhost:3000")

window.onerror = function(message, file, line) {
    data = {
        console: 'An error occured at line ' + line + ' of ' + file + ': ' + message
    }

    socket.emit("console", data)
}