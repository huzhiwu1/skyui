## skyui - 一个 Vue UI组件
[![Build Status](https://www.travis-ci.org/huzhiwu1/skyui.svg?branch=master)](https://www.travis-ci.org/huzhiwu1/skyui)
## 介绍
这是我在学习Vue过程中做的一个UI框架，希望对你有用
## 开始使用
1. 添加css样式，
请在css中开启border-box
```css
*，*::after,*::befor{box-sizing:border-box}
```
你还需要设置默认颜色等变量，（后续改为scss变量）
```css
html{
     --button-height:32px;
     --font-size:14px;
     --button-bg:#EAFFFF;
     --button-active-bg:#DBFFFF;
     --border-radius:4px;
     --color:#333;
     --border-color: #b4f2ff;
     --border-hover-color:#ADEBFF;
}
2. 安装
`npm i --save skyui-vue-huzhiwu`
```
3.引入skyui
```vue
import {Button,ButtonGroup,Icon} from "skyui-vue-huzhiwu"
import "skyui-vue-huzhiwu/dist/index.css"
export default{
    name:"app",
    components:{
        "g-button":Button,
        "g-icon":Icon,
        "g-button-group":ButtonGroup
    }
}
```
4. 引入svg symbols
```html

 <script src="//at.alicdn.com/t/font_1434472_421s66mzsf2.js"></script>
```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码
