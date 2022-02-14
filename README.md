# 关于 vue.config.js 配置

* publicPath
> 打包目录: 默认 vue cli 会认为应用会被部署到根目录上(即 / )
> 如果应用被部署到一个子路径上(如 https://www.my-app.com/my-app/), 可修改为 /my-app/

* outputDir
> 运行 vue-cli-service build 时构建的生产环境文件目录, 默认 `dist`
> 默认之前构建的包会被清除, 可以使用 `--no-clean` 关闭行为

*