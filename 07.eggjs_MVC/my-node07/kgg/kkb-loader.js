const fs = require('fs')
const path = require ('path')
const Router = require('koa-router')


function load (dir,cb) {
    const url = path.resolve(__dirname,dir)
    const files = fs.readdirSync(url)
    files.forEach(filename=>{
        filename = filename.replace('.js','')
        const file = require(url+'/'+filename)
        cb(filename,file)
    })
}


function initRouter(app){
    const router = new Router()
    load('routes',(filename,routes)=>{
        const prefix = filename==='index'?'':`/${filename}`
        routes = typeof routes ==='function' ? routes(app):routes
        Object.keys(routes).forEach(key=>{
            const [method,path] = key.split(' ')
            // router[method](prefix+path,routes[key])
            router[method](prefix+path,async ctx =>{
                app.ctx = ctx
                await routes[key](app)
            })
        })
    })
    return router
}

function initController(app){
    const controllers = {}
    load('controller',(filename,controller)=>{
        controllers[filename] = controller(app)
    })
    return controllers
}

function initService(){
    const services = {}
    load('service',(filename,service)=>{
        services[filename] = service
    })
    return services
}


module.exports={initRouter,initController,initService}