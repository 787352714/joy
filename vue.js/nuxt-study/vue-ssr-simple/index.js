const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();
const server = require('express')();

const app = new Vue({
    template:'<h1>hello SSR!!{{name}}</h1>',
    data:function () {
        return {
            name:'test'
        }
    }
})

server.get('*',(req,res)=>{
    renderer.renderToString(app,(err,html)=>{
        if(err){
            console.error(err);
        }
        console.log('html :', html);
        res.end(`<html>
            <body>${html}</body>
            </html>`)
    })
})

server.listen(8080);
