---
title:Button
sidebarDepth:2
---
# 按钮
<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

```vue
<template>
  <div>
    <mybutton>默认按钮</mybutton>
    <mybutton icon="setting">图标按钮</mybutton>
    <mybutton icon="setting" iconPosition="right">左右图标</mybutton>
    <mybutton icon="setting" :isLoading="true">加载图标</mybutton>
    <mybutton icon="setting" :isLoading="true" wave="#f00">水波红色</mybutton>
    <mybuttongroup>
      <mybutton icon="left">上一页</mybutton>
      <mybutton>中间页</mybutton>
      <mybutton icon="right">下一页</mybutton>
    </mybuttongroup>
  </div>
</template>

<script>
import Button from "skyui-vue-huzhiwu";
import ButtonGroup from "skyui-vue-huzhiwu";
export default {
  name: "button-demo",
  components: {
    mybutton: Button,
    mybuttongroup: ButtonGroup
  }
}
</script>
```