const https = require('https');
const port = 80;

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  });
  
