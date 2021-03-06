const fs = require('fs')
const path = require('path')
const mongoose = require("mongoose")
const config = require('../config')

function load(dir, cb) {
    // 获取绝对路径
    const url = path.resolve(__dirname, dir)  //  /Users/ikki/Desktop/kaikeba16/02node/node-text/05.mongodb/05/restful/model
    const files = fs.readdirSync(url)   //[ 'user.js' ]
    files.forEach(filename => {
        // 去掉后缀名
        filename = filename.replace('.js', '')  //user
        
        // 导入文件
        const file = require(url + '/' + filename)
        // 处理逻辑
        cb(filename, file)  
    })
}
function loadModel(app) {

    mongoose.connect(config.db.url, config.db.options);
    const conn = mongoose.connection
    conn.on("error", () => console.error("连接数据库失败"))
    app.$model = {}
    load('../model', (filename, { schema }) => {
        console.log('load model: ' + filename, schema)
        app.$model[filename] = mongoose.model(filename, schema)
    })

}

module.exports = {
    loadModel
}