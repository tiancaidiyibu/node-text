const {promisify} = require('util')


//repo 从哪里下载
//desc 下载到哪里
module.exports.clone =async function (repo,desc){
    const download = promisify(require('download-git-repo')) //下载git
    const ora = require('ora') //下载进度条
    const process = ora(`下载.....${repo}`) 
    process.start()
    await download(repo, desc)
    process.succeed()
}