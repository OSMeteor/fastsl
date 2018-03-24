### 规范
```
//-1  服务器繁忙（CPU  内存）
使用的code都是大于1000的
//2000  成功 normal
//   规定以1 0 开头的提示都是监控程序所用的错误
//   以 2 6 开头的提示都是成功
//   以 3 7 开头的都是db这类的交互错误
//   以 4 8 开头的都是提示给用户看的
//   以 5 9 开头的都是 服务器内部错误（比如连接不上mongodb）服务器CPU 内存
//eg:
    //2000   normal
    //3000   prompt 业务中的逻辑错误比如 redis mongodb 错误
    //4000  7000 prompt 用户输入错误(需要提示给用户) 对外的
    //5000  9000 system 服务器内部错误 （内部日志记录）
```

```
log.trace("trace")
log.debug("debug")
log.info("info")
log.warn({lang: 'fr'}, 'au revoir');
log.error("error");
log.fatal("fatal")

```

## API定义
```
http: { source: 'path' || 'body' || 'query'  'formData'  'form'
http 200  固定返回值 格式   必须包含 code msg result
 returns:[
      {arg: 'code', type: 'number', required: true},
      {arg: 'msg', type: 'string', required: true},
      {arg: 'result', type: 'array', required: true}
    ]
 {
    description: '更新用户信息 [未完成]',
    http: { path: '/setProfile/:Uid', verb: 'patch' },
    returns:[
      {arg: 'code', type: 'number', required: true},
      {arg: 'msg', type: 'string', required: true},
      {arg: 'result', type: 'array', required: true}
    ],
    accepts: [
      { arg: 'authid', type: 'string',default:"authid",description:" ",required: true, http: { source: 'path' } }
    ]
  }

```
### APi 使用示例
```
接口里面可能用到的引用
  XXX  是当前对象的注入对象
 var redisSlave = XXX.app.get("redisSlave");
    var redisMaster = XXX.app.get("redisMaster");
    const Apiapp = XXX.app.get("Apiapp");
    const validate = Apiapp.util.schemaValidator;
    const  Joi=Apiapp.util.Joi;
    const eutil = Apiapp.util.eutil;

     return Promise.resolve()
      ....
     .catch((res) => {
              if (eutil.isArray(res)) return Promise.resolve(res);
              else return Promise.reject(res);
     });

```


### 开发注意事项
- 定义api参数 server.datasources.db.define('paramType'，{}}, paramType为全局
