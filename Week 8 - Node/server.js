const http = require("http");

const PORT = 5000; // use port 3000, 5000 . Other ports may give error during deplaoyment

http
  .createServer(function (req, res) {
    console.log("Before res.end"); // will be displayed
    res.write(`<h1>Hello World</h1>`);
    res.end("Server is running on port " + PORT);
    console.log("After res.end"); // will also be displayed
  })
  .listen(PORT);

