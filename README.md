# 关于 vue.config.js 配置

* publicPath
> 打包目录: 默认 vue cli 会认为应用会被部署到根目录上(即 / )
> 如果应用被部署到一个子路径上(如 https://www.my-app.com/my-app/), 可修改为 /my-app/

* outputDir
> 运行 vue-cli-service build 时构建的生产环境文件目录, 默认 `dist`
> 默认之前构建的包会被清除, 可以使用 `--no-clean` 关闭行为

* assetsDir
> 生成静态资源(css, js, img, font)的目录 [相对于outputDir], 默认 ''

* indexPath
> 指定生成 index.html 的输出路径 [相对于outputDir], 默认 'index.html'

* lintOnSave
> 保存文件时, 是否 lint 代码 [安装 @vue/cli-plugin-eslint 后生效], 设置为 true 或 'warning' 时, eslint-loader 会将 lint 错误输出为编译警告.
> 设置非生产环境执行 lint 代码: lintOnSave: process.env.NODE_ENV !== 'production'

* productionSourceMap
> source map 的作用, 对于开发人员差错是非常有用的, 如果关闭生产 source map, 可以加速生成环境构建, 减少构建包体积

* chainWebpack
> 配合 webpack, 链式配置方式
> 执行 `vue inspect > output.js` 可查看 webpack 配置

* configureWebpack
> 配合 webpack, 简单配置方式
> 执行 `vue inspect > output.js` 可查看 webpack 配置

* css
> css 相关配置
> 配置 loaderOptions.css, 即便 requireModuleExtension 值为默认值, 我们也需要指出 requireModuleExtension: true
```javascript
module.exports ={
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            scss: {
                //  全局引入公共样式
                additionalData: '@import "~@/common/css/variable/scss";'
            }
        }
    }
}
```

* pluginOptions
> 三方插件配置
