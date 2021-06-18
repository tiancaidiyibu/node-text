const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()

app.use(express.static(__dirname + '/'))
app.use('/api', createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: false
}))
app.listen(3000,()=>{
    console.log('proxy listen at 3000')
})


//反向代理：server端进行代理，靠近服务器端


//正向代理：用服务器进行代理。靠近硬件端 