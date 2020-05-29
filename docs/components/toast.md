---
title:Toast
sidebarDepth:2
---
# Toast
<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

```vue
<template>
  <div>
    <myToast
      :autoClose="false"
      toastPosition="middle"
      waitTime="1000"
      :closeButton="{text:'关闭按钮',callback:handleClose}"
    >你好</myToast>
  </div>
</template>

<script>
import Toast from "skyui-vue-huzhiwu";
export default {
  name: "toastDemo",
  components: {
    myToast: Toast
  },
  methods: {
    handleClose(e) {
      console.log(e, "关闭");
    }
  }
};
</script>

<style>
</style>
```
`waitTime`：等待多长时间后关闭，如果设置了closeButton.callback则不生效，单位秒

`autoClose`: 是否自动关闭哦
`toastPosition:'top'/'bottom'/'middle'`:toast出现的位置。
`closeButton:{text:'按钮文字',callback:fn}`