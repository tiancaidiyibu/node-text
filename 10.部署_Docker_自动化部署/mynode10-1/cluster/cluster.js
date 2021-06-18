const cluster = require('cluster')
const os = require('os')
var numCPUs = os.cpus().length;
var process = require('process')

var workers = {}

if(cluster.isMaster){
    cluster.on('exit',(worker,code,signal)=>{
        delete workers[worker.process.pid]
        worker=cluster.fork()
        workers[worker.process.pid] = worker
    })
    for(var i = 0 ; i <numCPUs ; i++){
        var worker = cluster.fork()
        workers[worker.process.pid] = worker
    }
}else{
    var app = require('./app');
    app.listen(3000);
}

process.on('SIGTERM',function(){
    for(var pid in workers){
        process.kill(pid)
    }
    process.exit(0);
})
require('./test')