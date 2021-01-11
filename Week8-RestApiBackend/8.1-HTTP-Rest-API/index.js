const http = require("http");
const PORT = 3000;
const server = http.createServer((request, response) => {
  // our server logic will go here
  if (request.url == "/") {
    //check the URL of the current request
    // set response header
    response.writeHead(200, { "Content-Type": "text/html" });
    // set response content
    response.write("<html><body><p>This is home Page.</p></body></html>");
    response.end();
  }
});
server.listen(PORT);
console.log(`Listening on port ${PORT}`);
