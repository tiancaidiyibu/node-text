const koa = require("koa");
const {initRouter,initController,initService,loadConfig} = require("./ikki-loader");

class ikki {
    constructor(){
        this.$app = new koa()
        loadConfig(this)
        this.$service = initService(this)
        this.$ctrl = initController(this)
        this.$router = initRouter(this)
        this.$app.use(this.$router.routes())
    }
    start(port){
        this.$app.listen(port,()=>{
            console.log("服务器启动成功，端⼝" + port)
        })
        
    }
}

module.exports = ikki