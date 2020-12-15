<template>
  <div id="app">
    <h1>Calculator</h1>
    <div class="calculator">
      <Display :value="displayValue" />
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
  </div>
</template>

<script>
import Display from "./components/Display";
import Button from "./components/Button";
export default {
  data: function () {
    return {
      displayValue: 0,
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0,
    };
  },
  components: { Button, Display },
  methods: {
    clearMemory() {
      //Limpar o estado inicial do objeto
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      const firstTime = this.current === 0;
      if (firstTime) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const currentOperation = this.operation;
        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          );
        } catch (e) {
          this.$emit(`onError`, e);
        }

        this.values[1] = 0;
        this.displayValue = this.values[0];

        const equals = operation === "=";

        if (equals) {
          this.operation = null;
          this.current = 0;
          this.clearDisplay = false;
        } else {
          this.operation = operation;
          this.current = 1;
          this.clearDisplay = true;
        }
      }
    },
    addDigit(newValue) {
      let oldValue = this.displayValue;

      const OldHavePoint = oldValue.toString().indexOf(".") > -1;
      const OldValuePointInicial = (oldValue.toString().indexOf(".") == 0)
      const NewHavePoint = newValue === ".";
      
      if (NewHavePoint && OldHavePoint) {
        return;
      }

      if (oldValue === 0 || this.clearDisplay || OldValuePointInicial) {
        oldValue = "";
      }
      this.displayValue = oldValue + newValue;
      this.clearDisplay = false;

      if (newValue !== ".") {
        const indice = this.current;
        this.values[indice] = parseFloat(this.displayValue);
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
  font-family: "RobotoMono", "monospace";
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background-image: radial-gradient(
    circle farthest-corner at 22.4% 21.7%,
    rgba(4, 189, 228, 1) 0%,
    rgba(2, 83, 185, 1) 100.2%
  );
}
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