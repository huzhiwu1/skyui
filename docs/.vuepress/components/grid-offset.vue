<template>
  <div>
    <myrow>
      <mycol class="bg" :span="4">1</mycol>

      <mycol class="bg" :span="4" :offset="6">2</mycol>
      <mycol class="bg" :span="4" :offset="6">3</mycol>
    </myrow>
  </div>
</template>

<script>
import Row from "../../../src/row";
import Col from "../../../src/col";
export default {
  name: "grid",
  components: {
    myrow: Row,
    mycol: Col
  }
};
</script>

<style>
.bg {
  height: 100px;
}
.bg:nth-child(even) {
  background: #1e88e5;
}
.bg:nth-child(odd) {
  background: #34b5ff;
}
</style>
