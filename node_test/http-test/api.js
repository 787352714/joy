const http = require('http');
const queryString = require('querystring');


const server = http.createServer((req,res)=>{
    if(req.method === "POST"){
        console.log('reqType :', req.headers['content-type']);
        let postData = '';
        req.on('data',chunk=>{
            postData += chunk.toString();
        });
        req.on('end',()=>{
            console.log('postData :', postData);
            res.end('success');
        })
    }else{
        let url = req.url;
        console.log('url :', url);
        req.query = queryString.parse(url.split('?')[1]);
        console.log('req.query :', req.query);
        res.end(()=>{
            JSON.stringify(req.query);
        })
    }
})

server.listen(3000,()=>{
    console.log('监听成功 ');
})

