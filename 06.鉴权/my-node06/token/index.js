const Koa = require('koa')
const router = require('koa-router')()


const jwt = require("jsonwebtoken")
const jwtAuth = require("koa-jwt")
const secret = "it's a secret"
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const app = new Koa();
app.keys = ['some secret'];



app.use(static(__dirname + '/'));
app.use(bodyParser())


router.post("/users/login-token", async ctx => {
    const { body } = ctx.request;
    //登录逻辑，略
    //设置session
    const userinfo = body.username;
    ctx.body = {
        message: "登录成功",
        user: userinfo,
    // ⽣成 token 返回给客户端
        token: jwt.sign(
            {
                data: userinfo,
                // 设置 token 过期时间，⼀⼩时后，秒为单位
               exp: Math.floor(Date.now() / 1000) + 60 * 60
            },
            secret
        )
    };
});


