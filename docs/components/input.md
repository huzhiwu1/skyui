---
title:Input
sidebarDepth:2
---
# Input
具有光标聚焦态，hover态，focus态，disabled态，只读态，error态，
<ClientOnly>
<input-demo/>
</ClientOnly>

```vue
<template>
  <div>
      <myinput value="我是输入内容"></myinput>
      <myinput value="disabled态" disabled></myinput>
      <myinput value="readonly态" readonly></myinput>
      <myinput value="error" error="error态"></myinput>
      <myinput v-model="value"></myinput>
      <myinput @change="handleChange"></myinput>
  </div>
</template>

<script>
import Input from "skyui-vue-huzhiwu";
export default {
  name: "input-demo",
  components: {
    myinput: Input
  },
  data() {
    return {
      value: "我是双向绑定value"
    };
  },
  methods: {
    handleChange(e) {
      console.log(e, "我是change事件");
    }
  }
};
</script>

<style>
</style>
```