const http = require('http');

const server = http.createServer((req,res)=>{
  res.writeHead(200,{'content-type': 'text/html'})
  res.end('<h1>hello world</h1>')
})

server.listen(3000,(val)=>{
  console.log('val :', val);
  console.log('liseten in 3000 :');
})