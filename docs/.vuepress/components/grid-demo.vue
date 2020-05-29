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