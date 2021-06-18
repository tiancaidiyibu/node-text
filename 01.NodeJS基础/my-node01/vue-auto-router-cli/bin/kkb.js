#!/usr/bin/env node
const { program } = require('commander'); //命令行工具
program
    .version(require('../package.json').version)
    .command('init <name>')  //执行的命令 name为参数
    .description('init  project')  //命令描述
    //执行命令后所执行的方法。
    .action(require('../lib/init'))
program.parse(process.argv)


