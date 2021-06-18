module.exports = {
    "get /": async app => {
        const name = await app.$service.user.getName()
        app.ctx.body = "⽤户:" +name;
        // ctx.body = "⽤户⾸⻚";
     },
    "get /info": app => {
        app.ctx.body = "⽤户年龄：" + app.$service.user.getAge();
        // ctx.body = "⽤户详情⻚⾯";
     }
};