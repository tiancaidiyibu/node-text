const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const { method , url }  = req
    console.log('cookie',req.headers.cookie)
    if(method === 'GET' && url === '/'){
        fs.readFile("./index.html", (err, data) => {
            res.setHeader("Content-Type", "text/html");
            res.end(data)
        })
    }else if( method === 'GET' && url === '/api/users' ){
        // console.log(url)
        res.setHeader("Content-Type", "application/json");
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')  // CORS(Cross Origin Resource Share) - 跨域资源共享，后端⽅案，解决跨域
        res.setHeader('Set-Cookie', 'cookie1=va222;')
        res.end(JSON.stringify([{ name: "tom", age: 20 }]));
    }else if( method == "OPTIONS" && url == "/api/users" ) {
        res.setHeader('Access-Control-Allow-Credentials', 'true');  //携带cookie
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Headers": "X-Token,Content-Type",
            "Access-Control-Allow-Methods": "PUT"
        });
        res.end();
    }
})

server.listen(4000,()=>{
    console.log('api listen at 4000')
}) 