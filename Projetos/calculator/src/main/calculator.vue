<template>
  <div class="calculator">
    <Display value="10000" />
    <Button label="AC" triple @f-click="clearMemory" />
    <Button label="/" operation @f-click="setOperation" />
    <Button label="7" @f-click="addDigit" />
    <Button label="8" @f-click="addDigit" />
    <Button label="8" @f-click="addDigit" />
    <Button label="*" operation @f-click="setOperation" />
    <Button label="4" @f-click="addDigit" />
    <Button label="5" @f-click="addDigit" />
    <Button label="6" @f-click="addDigit" />
    <Button label="-" operation @f-click="setOperation" />
    <Button label="1" @f-click="addDigit" />
    <Button label="2" @f-click="addDigit" />
    <Button label="3" @f-click="addDigit" />
    <Button label="+" operation @f-click="setOperation" />
    <Button label="0" double @f-click="addDigit" />
    <Button label="." @f-click="addDigit" />
    <Button label="=" operation @f-click="setOperation" />
  </div>
</template>

<script>
import Display from "../components/Display";
import Button from "../components/Button";
export default {
  components: { Button, Display },
  methods: {
    clearMemory() {
      console.log("Limpar Memória!");
    },
    setOperation(operation) {
      console.log("Operação " + operation);
    },
    addDigit(n) {
      console.log("Digito " + n);
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px 48px;
}
</style>