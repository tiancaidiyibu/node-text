const Service = require('egg').Service

class UserService extends Service {
    async getAll(){
        // return [
        //     {
        //         name:'IKKI',
        //         Age:18
        //     }
        // ]
        const {User} = this.ctx.model
        await  User.create({name: "laowang"})
        return await User.findAll()
    }
}

module.exports = UserService