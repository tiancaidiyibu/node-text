const Koa = require('koa')
const router = require('koa-router')()
const session = require('koa-session')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const app = new Koa();


// 配置项
const SESS_CONFIG = {
    key: 'kkb:sess', // cookie键名
    maxAge: 86400000, // 有效期，默认⼀天
    httpOnly: true, // 仅服务器修改
    signed: true, // 签名cookie
};

//配置session的中间件
app.use(cors({
    credentials: true
}))
app.keys = ['some secret'];

app.use(static(__dirname + '/'));
app.use(bodyParser())
// 注册
app.use(session(SESS_CONFIG,app))


// 鉴权
app.use((ctx,next)=>{
    if(ctx.url.indexOf('login')>-1){
        next()
    }else{
        if(!ctx.session.userinfo){
            ctx.body = '登录失败'
        }else{
            next()
        }
    }
})

router.post('/login', async (ctx) => {
    const {  body }  = ctx.request

    //设置session
    ctx.session.userinfo = body.username;
    ctx.body = {
        message: "登录成功"
    }
})
router.post('/logout', async (ctx) => {
    //设置session
    delete ctx.session.userinfo
    ctx.body = {
        message: "登出系统"
    }
})
router.get('/getUser', async (ctx) => {
    ctx.body = {
        message: "获取数据成功",
        userinfo: ctx.session.userinfo
    }
})

app.use(router.routes());
app.listen(3000);