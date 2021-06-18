const conf = require('./conf')
const EventEmitter = require("events").EventEmitter;
const MongoClient = require("mongodb").MongoClient;



class Mongodb {

    constructor(conf){
        this.conf = conf;
        this.emitter = new EventEmitter()
        this.client = new MongoClient(conf.url, { useNewUrlParser: true }) 
        this.client.connect(err=>{
            if(err)throw err;
            console.log('连接成功')
            this.emitter.emit('connect')
        })
    }

    // 返回集合
    col(colName, dbName = conf.dbName){
        return this.client.db(dbName).collection(colName)
    }


    // 用于连接订阅事件
    once(event,cb){
        this.emitter.once(event,cb)
    }



}

module.exports = new Mongodb(conf)
