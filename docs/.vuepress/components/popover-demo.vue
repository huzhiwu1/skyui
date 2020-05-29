<template>
  <div>
    <mypopover :visible="one" style="margin-right:60px">
      <template v-slot:content>我是内容</template>
      <button @click="one=!one">按钮</button>
    </mypopover>

    <mypopover v-model="two" style="margin-right:60px">
      <template v-slot:content>双向绑定</template>
      <button>按钮</button>
    </mypopover>

    <mypopover v-model="three" style="margin-right:60px" position="right">
      <template v-slot:content>内容的位置</template>
      <button>按钮</button>
    </mypopover>
    <mypopover v-model="four" style="margin-left:60px" trigger="hover">
      <template v-slot:content>hover事件</template>
      <button>按钮</button>
    </mypopover>
  </div>
</template>

<script>
import Popover from "../../../src/popover";
export default {
  name: "popoverDemo",
  components: {
    mypopover: Popover
  },
  data() {
    return {
      one: true,
      two: true,
      three: true,
      four: true
    };
  }
};
</script>

<style>
</style>