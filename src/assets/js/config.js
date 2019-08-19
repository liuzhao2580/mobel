let baseURL = ''

if (process.env.NODE_ENV === 'production') {
    //根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境
    if (process.env.VUE_APP_TITLE === 'production') {
        //production 生产环境
        // baseURL = 'http://192.168.10.111:8080/zhikong'
    } else {
        //test 测试环境
        baseURL = ''
    }
} else {
    //development 开发环境
    baseURL = 'https://www.easy-mock.com/mock/5d3183c3a368716b0b7d050f/MobelProject'
}

export default baseURL
