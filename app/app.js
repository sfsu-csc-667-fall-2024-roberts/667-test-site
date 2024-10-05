const net = require("net");

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log("Usage: node app.js <port your server is running on>");
  process.exit(1);
}

const port = args[0];
const socket = new net.Socket();

socket.on("data", (data) => {
  console.log("Receiving data from server");

  console.log(data.toString());
  socket.end();
});

socket.on("error", (error) => {
  console.log("Error");
  console.log(error);
  socket.end();
});

socket.connect(port, "localhost", () => {
  console.log("Connected to server, sending invalid request");
  socket.write("GET HTTP/1.1\r\n");
  socket.write("Host: localhost\r\n");
  socket.write("Connection: close\r\n");
  socket.write("\r\n");
});
