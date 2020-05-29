---
title:Grid
sidebarDepth:2
---
# grid
row会根据父元素的宽度平均分成24份
<ClientOnly>
<grid-demo/>
</ClientOnly>

```vue
<template>
  <div>
    <myrow>
      <mycol class="bg" :span="1">1</mycol>
      <mycol class="bg" :span="1">2</mycol>
      <mycol class="bg" :span="1">3</mycol>
      <mycol class="bg" :span="1">4</mycol>
      <mycol class="bg" :span="1">5</mycol>
      <mycol class="bg" :span="1">6</mycol>
      <mycol class="bg" :span="1">7</mycol>
      <mycol class="bg" :span="1">8</mycol>
      <mycol class="bg" :span="1">9</mycol>
      <mycol class="bg" :span="1">10</mycol>
      <mycol class="bg" :span="1">11</mycol>
      <mycol class="bg" :span="1">12</mycol>
      <mycol class="bg" :span="1">13</mycol>
      <mycol class="bg" :span="1">14</mycol>
      <mycol class="bg" :span="1">15</mycol>
      <mycol class="bg" :span="1">16</mycol>
      <mycol class="bg" :span="1">17</mycol>
      <mycol class="bg" :span="1">18</mycol>
      <mycol class="bg" :span="1">19</mycol>
      <mycol class="bg" :span="1">20</mycol>
      <mycol class="bg" :span="1">21</mycol>
      <mycol class="bg" :span="1">22</mycol>
      <mycol class="bg" :span="1">23</mycol>
      <mycol class="bg" :span="1">24</mycol>
    </myrow>
  </div>
</template>

<script>
import Row from "skyui-vue-huzhiwu";
import Col from "skyui-vue-huzhiwu";
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
```
offset向左偏移多少格子
<ClientOnly>
<grid-offset/>
</ClientOnly>

```vue
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
import Row from "skyui-vue-huzhiwu";
import Col from "skyui-vue-huzhiwu";
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

```
响应式
| 匹配模式 | 尺寸    | 数据类型                 |
| -------- | ------- | ------------------------ |
| phone    | <576px  | {span:1,offset:2},object |
| ipad     | ≥576px  | {span:1,offset:2},object |
| narrowPc | ≥768px  | {span:1,offset:2},object |
| Pc       | ≥992px  | {span:1,offset:2},object |
| widePc   | ≥1200px | {span:1,offset:2},object |

<ClientOnly>
<grid-response/>
</ClientOnly>
尺寸是向下兼容的，比如写了phoen和narrowPc两个尺寸，在ipad尺寸时应用的是phone的模式

```vue
<template>
  <div>
    <myrow>
      <mycol class="bg" :phone="{span:24}" :ipad="{span:12}" :narrowPc="{span:6,offset:6}">1</mycol>
      <mycol class="bg" :phone="{span:24}" :ipad="{span:12}" :narrowPc="{span:6,offset:6}">2</mycol>
    </myrow>
  </div>
</template>
<script>
import Row from "skyui-vue-huzhiwu";
import Col from "skyui-vue-huzhiwu";
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
```