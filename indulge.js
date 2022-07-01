const https = require('https');
const port = 3000;

const server = https.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  });
