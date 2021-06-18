module.exports =app=> ({
    index : async ctx => {
        const name = await app.$service.user.getName()
        app.ctx.body = 'ctrl user' + name
    },
    detail : async ctx => {
        ctx.body = '想去页面 。。。 ctrl'
    }
})