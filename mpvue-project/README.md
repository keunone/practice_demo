# mpvue-project

> a mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1、在project.config.json文件中配置小程序appid

2、server文件夹下配置config文件的qcloudAppId: '',qcloudSecretId: '',qcloudSecretKey: '',
  mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: '',
        char: 'utf8mb4'
    },
    数据库用户名及密码

    3、项目根目录下npm install安装前端项目依赖包

    4、server目录下npm install 安装后台项目依赖包



