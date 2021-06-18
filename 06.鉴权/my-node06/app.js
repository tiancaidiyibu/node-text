const Koa = require('koa')
const app = new Koa()

const session = require('koa-session')

// const redisStore = require('koa-redis')
// const redis = require('redis') 
// const redisClient = redis.createClient(6379,'localhost')
// const wrapper = require('co-redis');
// const client = wrapper(redisClient);
// app.use(session({
//     key:'kkb:sess',
//     store: redisStore({client}) // 此处可以不必指定client
// }, app));
// app.use(async (ctx,next) => {
//     const keys = await client.keys('*')
//     keys.forEach(async key =>
//     console.log('hahha',await client.get(key)))
//     await next()
// })





// 签名key keys作⽤ ⽤来对cookie进⾏签名
// app.keys = ['some secret']
// 配置项
// const SESS_CONFIG = {
//     key: 'kkb:sess', // cookie键名
//     maxAge: 86400000, // 有效期，默认⼀天
//     httpOnly: true, // 仅服务器修改
//     signed: true, // 签名cookie(每次都变)
// };
// 注册
// app.use(session(SESS_CONFIG,app))
// app.use(ctx=>{
//     if (ctx.path === '/favicon.ico') return;
//     let n = ctx.session.count||0;
//     ctx.session.count= ++n
//     ctx.body = '第' + n + '次访问';
// })
// app.listen(3000)