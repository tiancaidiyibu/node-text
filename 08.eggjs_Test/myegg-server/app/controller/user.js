'use strict';

const Controller = require('egg').Controller;


/**
 * @Controller ⽤户管理
 */
class UserController extends Controller{
    constructor(ctx){
        super(ctx)
    }

    /**
     * @summary 创建⽤户
     * @description 创建⽤户，记录⽤户账户/密码/ 类型
     * @router post /api/user/create
     * @request body createUserRequest *body
     * @response 200 baseResponse 创建成功
     */
    async create(){
        const {ctx} = this
        ctx.validate(ctx.rule.createUserRequest)
        const res = {abc:123}
        ctx.helper.success({ctx, res})
    }
    /**
     * @summary 删除⽤户
     * @description 删除⽤户
     * @router post /api/user/del
     * @request body delUserRequest *body
     * @response 200 baseResponse 创建成功
     */
    async del(){
        const {ctx} = this
        ctx.body = 'hahah'
    }
}

module.exports = UserController