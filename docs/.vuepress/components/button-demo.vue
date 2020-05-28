<template>
  <div>
    <mybutton>默认按钮</mybutton>
    <mybutton icon="setting">图标按钮</mybutton>
    <mybutton icon="setting" iconPosition="right">左右图标</mybutton>
    <mybutton icon="setting" :isLoading="true">加载图标</mybutton>
    <mybutton icon="setting" :isLoading="true" wave="#f00">水波红色</mybutton>
  </div>
</template>

<script>
import Button from "skyui-vue-huzhiwu";
export default {
  name: "button-demo",
  components: {
    mybutton: Button
  },
  data() {
    return {
      content: `
       <mybutton>默认按钮</mybutton>
    <mybutton icon="setting">图标按钮</mybutton>
    <mybutton icon="setting" iconPosition="right">左右图标</mybutton>
    <mybutton icon="setting" :isLoading="true">加载图标</mybutton>
    <mybutton icon="setting" :isLoading="true" wave="#f00">水波红色</mybutton>`
    };
  }
};
</script>

<style>
</style>