---
title:Collapse
sidebarDepth:2
---
# collapse
<ClientOnly>
<collapse-demo/>
</ClientOnly>
title是标题 

```vue
<template>
  <div>
    <mycollapse>
      <mycollapseitem title="one">content one</mycollapseitem>
      <mycollapseitem title="two">content two</mycollapseitem>
      <mycollapseitem title="three">content three</mycollapseitem>
    </mycollapse>
  </div>
</template>

<script>
import Collapse from "skyui-vue-huzhiwu";
import CollapseItem from "skyui-vue-huzhiwu";
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
```

自定义标题

`<template v-slot:title><span>我是自定义标题</span></template>`

<ClientOnly>
<collapse-title/>
</ClientOnly>

```vue
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
import Collapse from "skyui-vue-huzhiwu";
import CollapseItem from "skyui-vue-huzhiwu";
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
```

collapse接受value来指定哪个collapse-item展开

<ClientOnly>
<collapse-value/>
</ClientOnly>

```vue
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
import Collapse from "skyui-vue-huzhiwu";
import CollapseItem from "skyui-vue-huzhiwu";
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
```

collapse的属性accordion设置为true可以每次只展开一个collapse-item
`<collapse :accordion='true'>`

双向绑定
`<collapse v-model={xxx}>`