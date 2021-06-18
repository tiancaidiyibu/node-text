module.exports =app=> ({
    index: async ctx => {
        const name = await app.$service.user.getName()
        app.ctx.body = 'ctrl user' + name
    },
    detail: ctx => {
        app.ctx.body = "详情⻚⾯,,,ctrl";
    }
})