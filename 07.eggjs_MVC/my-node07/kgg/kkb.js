const Koa = require('koa')
const {initRouter,initController,initService} = require("./kkb-loader");

class kkb {
    constructor(conf){
        this.$app = new Koa(conf)
        this.$service = initService();
        this.$ctrl = initController(this)
        this.$router = initRouter(this)
        this.$app.use(this.$router.routes())
    }
    start(port){
        this.$app.listen(port,()=>{
            console.log('启动成功')
        })
    }
    
}

module.exports = kkb