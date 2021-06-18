'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 生成路由
  swaggerdoc : {
    enable: true,
    package: 'egg-swagger-doc-feat',
  },
  // 参数校验
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  mongoose : {
    enable: true,
    package: 'egg-mongoose',
  },
  // 加密
  bcrypt : {
    enable: true,
    package: 'egg-bcrypt'
  },
  // 鉴权
  jwt: {
    enable: true,
    package: 'egg-jwt',
  }
};
