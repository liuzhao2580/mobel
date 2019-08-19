# vue-mobile

## Project setup
```
yarn install
```
## lib-flexible的配置使用
```
1.首先安装 cnpm i lib-flexible --save
2. main.js中导入
import 'lib-flexible/flexible.js'
3. 安装自动将px转换为rem的插件
cnpm i postcss-pxtorem --save
4. 配置pxtorem的基准单位(在package.json或者postcss.config.js中书写配置信息)
plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      "rootValue": 75, // 设计稿宽度的1/10
      "propList": ["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
    }
}


注意事项: 引入flexible.js后需要删除 默认带有viewport 的 meta 标签。
如果不删除,所有设备的dpr都会是1
```

## iconfont 中fontclass 的使用配置
```
1.首先将使用的图标样式添加到项目中
2.更新代码之后复制链接
3.在项目的index.html文件下面引入 (每次更新代码都需要重新引入)
例如: <link rel="stylesheet" href="//at.alicdn.com/t/font_1358664_qk5msk8cxb.css">
4.使用
<i class="iconfont icon-xxx"></i>
```