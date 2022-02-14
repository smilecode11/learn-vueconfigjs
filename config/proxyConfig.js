const REQUEST_URL = process.env.VUE_APP_TARGET_URL;

module.exports = {
    /** 开发环境代理*/
    development: {
        '/api/': {
            target: `${REQUEST_URL}:9001`, //  代理地址
            secure: false, //  是否关闭 https 安全认证
            changeOrigin: true, //  修改代理请求 host
            pathRewrite: {
                '/api/': '',
            }, //  请求地址重写
            cookieDomainRewrite: {
                [REQUEST_URL]: 'localhost' // 把相应的 cookie 域都设置成 localhost，或者指定的域名
            },
            proxyTimeout: 100000, //  请求超时时间
        },
    },
    /** 预发环境代理*/
    pre: {},
    /** 生产环境代理*/
    production: {}
}