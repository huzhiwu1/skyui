---
title:Tabs
sidebarDepth:2
---
# Tabs
![image-20200529095348714](https://tva1.sinaimg.cn/large/007S8ZIlgy1gf932gnkpvj30im038wed.jpg)

```vue
<template>
    <mytabs :selected="1" direction='horizontal'>
            <mytabpane label="one">content one</mytabpane>
            <mytabpane label="two">content two</mytabpane>
            <mytabpane label="two">content three</mytabpane>
    </mytabs>
<template>
<script>
import Tabs from "skyui-vue-huzhiwu";
import TabPane from "skyui-vue-huzhiwu";
export default {
  components: {
    mytabs: Tabs,
    mytabpane: TabPane
  }
};
</script>

```
`selected:number`表示选中那一个tab

`label是标题` 也可以自定义标题`<template v-slot:label></tempalte>`

`direction:'horizontal|vertical'`表示水平或垂直方向