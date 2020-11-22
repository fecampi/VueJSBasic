<template>
  <div class="container">
    <h4>Pai</h4>
    De Pai pra Filho A: <input type="text" v-model="propsA" /><br />
    Do Filho B para o Pai: {{ propsB }}<br />
    Do Filho C para o Pai: {{ propsC }}
    <div class="componentes">
      <FilhoA :propsA="propsA" />
      <FilhoB :setPropsB="setPropsB" />
      <FilhoC :propsC="propsC" @changePropsC="propsC = $event" />
      <FilhoD :propsD="propsB" />

    </div>
  </div>
</template>

<script>
import FilhoA from "./FilhoA";
import FilhoB from "./FilhoB";
import FilhoC from "./FilhoC";
import FilhoD from "./FilhoD";


export default {
  components: { FilhoA, FilhoB, FilhoC, FilhoD},
  data() {
    return {
      propsA: "",
      propsB: "",
      propsC: "",
    };
  },
  methods: {
    setPropsB(p) {
      this.propsB = p;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.componentes {
  display: grid;
}
</style>
