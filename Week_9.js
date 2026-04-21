const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');

const event = new EventEmitter();

event.on('msg', () => {
    console.log("Event Triggered");
});

const server = http.createServer((req, res) => {
    res.write("Server Running\n");

    res.write("OS: " + os.platform() + "\n");
    res.write("File: " + path.basename(__filename) + "\n");

    event.emit('msg');

    res.end();
});

server.listen(3000);
