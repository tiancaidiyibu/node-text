const { Controller } = require('egg')

class UserController extends Controller {
    async users(){
        // this.ctx.body=[{
        //     name:'IKKI'
        // }]
        const { ctx } = this
        ctx.body = await ctx.service.user.getAll()
    }
}
module.exports= UserController