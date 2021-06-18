// https://www.josephxia.com/document/node/cache/HTTP%E7%BC%93%E5%AD%98.html#web%E7%BC%93%E5%AD%98%E6%98%AF%E4%BB%80%E4%B9%88


// 更新时间，1s更新一次
function updateTime(){
    setInterval(()=>this.time=new Date().toUTCString(),1000)
    return this.time
}

const http = require('http')

http.createServer((req,res)=>{
    const { url } = req
    if('/' === url) {
        res.end(`
            <html>
                <!-- <meta http-equiv="Refresh" content="5" /> -->
                Html Update Time: ${updateTime()}
                <script src='main.js'></script>
            </html>
        `)
    }else if(url === '/main.js'){
        const content = `document.writeln('<br>JS   Update Time:${updateTime()}')`
        // http1.0强缓存
        res.setHeader('Expires',new Date(Date.now()+10*1000).toUTCString())
        // http1.1强缓存
        res.setHeader('Cache-Control','max-age=20')

        //协商缓存  last-modified
        // res.setHeader('Cache-Control','no-cache') 
        // res.setHeader('last-modified', new Date().toUTCString())
        // if(new Date(req.headers['if-modified-since']).getTime()+3*1000>Date.now()){
        //     console.log('协商缓存命中....')
        //     res.statusCode = 304
        //     res.end()
        //     return
        // }

        //协商缓存  etag
        // res.setHeader('Cache-Control', 'no-cache')
        // const crypto = require('crypto');
        // const hash = crypto.createHash('sha1').update(content).digest('hex')
        // res.setHeader('Etag', hash)
        // if(req.headers['if-none-match'] === hash){
        //     console.log('Etag协商缓存命中.....')
        //     res.statusCode = 304
        //     res.end()
        //     return 
        // }


        res.statusCode = 200
        res.end(content)
    }else if (url === '/favicon.ico') {
        res.end('')
    }
})
.listen(3000,()=>{
    console.log('http cache test at run at' + 3000)
})