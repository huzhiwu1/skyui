<template>
  <div>
    <div style="margin-top:10px">
      <myinput value="我是输入内容"></myinput>
    </div>
    <div style="margin-top:10px">
      <myinput value="disabled态" disabled></myinput>
    </div>
    <div style="margin-top:10px">
      <myinput value="readonly态" readonly></myinput>
    </div>
    <div style="margin-top:10px">
      <myinput value="error" error="error态"></myinput>
    </div>

    <div style="margin-top:10px">
      可双向绑定value
      <myinput v-model="value"></myinput>
    </div>
    <div style="margin-top:10px">
      可绑定事件change,input,blur,focus
      <myinput @change="handleChange"></myinput>
    </div>
  </div>
</template>

<script>
import Input from "../../../src/input";
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