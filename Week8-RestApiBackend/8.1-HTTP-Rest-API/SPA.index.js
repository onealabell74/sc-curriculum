const http = require("http");

const PORT = 4040;

const server = http.createServer((request, response) => {
  // our server logic will go here
});


server.listen(PORT);
console.log(`Listening on port ${PORT}`);


const http = require('http')
const server = http.createServer(() => {})
server.listen(8675)
console.log('Listening on port 8675')


app
  .route('/posts')
  .get((request, response) => {
    // handle GET request
  })
  .post((request, response) => {})
