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
import Toast from "../../../src/toast";
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