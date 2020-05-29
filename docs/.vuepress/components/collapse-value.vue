<template>
  <div>
    <mycollapse value="one">
      <mycollapseitem title="one" name="one">content one</mycollapseitem>
      <mycollapseitem title="two" name="two">content two</mycollapseitem>
      <mycollapseitem title="three" name="two">content three</mycollapseitem>
    </mycollapse>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";
export default {
  name: "collapse-demo",
  components: {
    mycollapse: Collapse,
    mycollapseitem: CollapseItem
  }
};
</script>

<style>
</style>