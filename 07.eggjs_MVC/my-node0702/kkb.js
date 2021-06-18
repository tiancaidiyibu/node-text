const koa = require('koa')
const { initRouter,initController,initService,loadConfig}  = require('./kkb-loader')

class kkb {
    constructor(conf){
        this.$app = new koa(conf)
        loadConfig(app)
        this.$service = initService()
        this.$ctrl = initController(this)
        this.$router = initRouter(this)
        this.$app.use(this.$router.routes())
    }
    start(port) { 
        this.$app.listen(port, () => {
            console.log("服务器启动成功，端⼝" + port);
        });
    }
}
module.exports = kkb