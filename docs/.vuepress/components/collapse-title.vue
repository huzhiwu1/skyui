<template>
  <div>
    <mycollapse>
      <mycollapseitem>
        <template v-slot:title>
          <span>我是自定义标题一</span>
        </template>
        content one
      </mycollapseitem>
      <mycollapseitem>
        <template v-slot:title>
          <span>我是自定义标题二</span>
        </template>content two
      </mycollapseitem>
      <mycollapseitem>
        <template v-slot:title>
          <span>我是自定义标题三</span>
        </template>content three
      </mycollapseitem>
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