module.exports = {
    "get /": async app => {
        const name  = await app.$service.user.getName()
        app.ctx.body  = '用户'+name
    },
    "get /info": async app => {
        app.ctx.body = "⽤户详情⻚⾯";
    }
};