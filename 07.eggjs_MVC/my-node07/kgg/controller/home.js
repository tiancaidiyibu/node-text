module.exports = app =>( {
    index: async ctx => {
        console.log('index ctrl')
        const name = await app.$service.user.getName()
        app.ctx.body = 'ctrl user' + name
     },
    detail: ctx => {
        ctx.body = "详情⻚⾯...ctrl";
    }
})