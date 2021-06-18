const cluster = require('cluster') //控制进程
const os = require('os')  
const numCPUs = os.cpus().length //获取cpu数量

const process = require('process') 
const workers = {};
if(cluster.isMaster){
    cluster.on('exit',(worker,code,signal)=>{
        console.log('⼯作进程 %d 关闭 (%s). 重启中...',worker.process.pid, signal || code);
        delete workers[worker.process.pid]
        worker = cluster.fork()
        workers[worker.process.pid] = worker
    })
    // 主进程
    for(var i = 0 ;i<numCPUs;i++){
        var worker = cluster.fork()
        console.log('init ... pid', worker.process.pid)
        workers[worker.process.pid] = worker
    }
}else{
    var server = require('./app');
    server.listen(3000);
}

// 当主进程被终⽌时，关闭所有⼯作进程
process.on('SIGTERM', function () {
    for (var pid in workers) {
    process.kill(pid);
     }
    process.exit(0);
});
require('./test')