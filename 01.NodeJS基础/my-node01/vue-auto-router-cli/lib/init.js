const { promisify }  = require('util')

const {clone} = require('./download')

const figlet = promisify(require('figlet'))  //命令行欢迎界面

const clear = require('clear')  //清除命令行

const chalk = require('chalk') //改变命令行颜色

const log = content => console.log(chalk.green(content))

module.exports = async name => {
    // 打印欢迎画⾯
    clear()
    const data = await figlet('IKKI Welcome')
    log(data)
    await clone('github:su37josephxia/vue-template', name)
}
