const http = require("http");
const os = require("os");
const path = require("path");
const EventEmitter = require("events");

// Create Event Emitter Object
const eventEmitter = new EventEmitter();

// Custom Event
eventEmitter.on("requestReceived", () => {
    console.log("A request has been received by the server.");
});

// Create Server
const server = http.createServer((req, res) => {

    // Emit Event
    eventEmitter.emit("requestReceived");

    // Set Header
    res.writeHead(200, { "Content-Type": "text/html" });

    // OS Module Information
    const osInfo = `
        <h2>OS Module Information</h2>
        <p>Platform: ${os.platform()}</p>
        <p>Architecture: ${os.arch()}</p>
        <p>CPU Cores: ${os.cpus().length}</p>
        <p>Free Memory: ${os.freemem()}</p>
        <p>Total Memory: ${os.totalmem()}</p>
        <p>Home Directory: ${os.homedir()}</p>
    `;

    // Path Module Information
    const pathInfo = `
        <h2>Path Module Information</h2>
        <p>Filename: ${path.basename(__filename)}</p>
        <p>Directory Name: ${path.dirname(__filename)}</p>
        <p>Extension: ${path.extname(__filename)}</p>
    `;

    // Response Output
    res.write(`
        <h1>Custom Node.js Server</h1>
        ${osInfo}
        ${pathInfo}
    `);

    res.end("<h3>Server Response Completed</h3>");
});

// Port Number
const PORT = 3000;

// Start Server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
