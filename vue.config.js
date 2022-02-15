const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'development'
//  默认代理设置
const defaultDevServer = require('./config/proxyConfig')[NODE_ENV] || {}

module.exports = {
    //  打包基础路径, 默认站点目录
    publicPath: process.env.BASE_URL || '/',
    //  生产环境构建文件目录, 默认 dist
    outputDir: process.env.OUTPUT_DIR || 'dist',
    //  生成静态资源(css, js, img, font)的目录 [相对于outputDir], 默认 ''
    assetsDir: process.env.ASSETS_DIR || '',
    //  指定生成 index.html 的输出路径 [相对于outputDir], 默认 'index.html'
    indexPath: process.env.INDEX_PATH || 'index.html',
    //  保存文件时, 是否 lint 代码 [安装 @vue/cli-plugin-eslint 后生效], 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。
    lintOnSave: process.env.NODE_ENV !== 'production', //  非生产环境, 执行 lint 代码
    //  是否使用包含运行时编译器的 Vue 构建版本, 默认 false
    runtimeCompiler: false,
    //  source map的作用，对于开发人员查错时非常有用的, 且减少构建包的体积
    productionSourceMap: false, //  如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建

    //  配合 webpack, 链式配置方式, 执行命令 `vue inspect > output.js` 查看 webpack 配置
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'test title' //  修改创建项目时设置的 title, 即 htmlWebpackPlugin.options.title
                return args
            })

        // //  替换规则的 loader
        // const svgRule = config.module.rule('svg')
        // svgRule.uses.clear() // 清除已有的所有loader
        // svgRule
        //     .use('vue-svg-loader')
        //     .loader('vue-svg-loader')

        // //  添加 loader 选项
        // config.module.rule('vue')
        //     .test(/\.vue$/)
        //     .use('vue-loader')
        //     .tap(options => {
        //         // console.log(options)
        //         // options.cacheIdentifier = '5581dfd0'
        //         return options
        //     })
    },
    //  配合 webpack, 简单配置方式
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置
            console.log('生产环境配置')

        } else {
            // 为开发环境修改配置
            console.log('开发环境配置')
            // config.module.rules.push({
            //     enforce: "pre",
            //     test: /\.(js|vue)$/,
            //     loader: "eslint-loader",
            //     exclude: /(node_modules)/,
            //     include: [path.join(__dirname, 'src')],
            //     options: {
            //         fix:true
            //     }
            // })
        }
    },

    //#region css 相关配置
    css: {
        sourceMap: false,
        //  配置了loaderOptions.css, 尽管requireModuleExtension的值为默认值，我们也需要指出
        requireModuleExtension: true,
        loaderOptions: {
            scss: {
                additionalData: '@import "~@/common/css/variable.scss";' //  配置全局引入该样式文件
            }
        }
    },
    //#endregion css 相关配置

    //#region 开发环境代理配置
    devServer: {
        proxy: {
            ...defaultDevServer,
            '/': {
                target: process.env.VUE_APP_TARGET_URL,
                secure: false,
                changeOrigin: true,
                onProxyReq(request, req, res) {
                    //  给代理请求头添加 cookie
                    request.setHeader('cookie', 'mycookieQWERTYUIOP');
                },
                onProxyRes(response, req, res) {
                    //  常用来获取 cookie, 作重定向操作等
                }
            }
        }
    },
    //#endregion 开发环境代理配合

    //#region 三方插件配置
    // pluginOptions: {}
    //#endregion 三方插件配置

    //  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity, 默认 false, 如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
    // integrity: true,
    //  设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
    // crossorigin: undefined,
    //  默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    // transpileDependencies: [],

    //  pages, 多页面应用时配置, 每个 page, 都有自己对应的  javascript 入口文件, 其值是一个对象
    //#region 多页面应用配置 pages 选项
    // pages: {
    //     index: {
    //         entry: 'src/index/main.js', //  index 页面访问入口
    //         template: 'public/index.html', //  页面模板来源
    //         filename: 'index.html', //  在 dist/index.html 的输出
    //         title: 'Index Page', //  使用时, template 页面模板的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         chunks: ['chunk-vendors', 'chunk-common', 'index'], //  页面中包含的块, 提取出来的通用 chunk 和 vendor chunk。
    //     },
    //     //  当使用是由入口的字符串格式时
    //     //  模板会被推导为 public/subpage.html, 如果找不到会被回退到 public/index.html, 输出文件名会被推导为 subpage.html
    //     subpage: 'src/subpage/main.js'
    // }
    //#endregion 多页面配置

}