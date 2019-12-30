const http = require('http');
const queryString = require ('querystring');

const server = http.createServer((req,res)=>{
    const method = req.method;
    const url = req.url;
    const query = queryString.parse(url.split('?')[1]);

    res.setHeader('Content-type','application/json');
    
    let resData = {
        method,
        url,
        query
    }
    
    if(method === 'GET'){
        res.end(
            JSON.stringify(resData)
        )
    }

    if(method === 'POST'){
        let postData = '';
        req.on('data',chunk=>{
            postData += chunk.toString();
        });
        req.on('end',()=>{
            resData.postData = postData;
            res.end(
                JSON.stringify(resData)
            )
        })
    }
    
})

server.listen('3000',()=>{
    console.log('sucess');
})