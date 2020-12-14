<template>
  <div id="app"><h1>Calculator</h1><Calculator/></div>
</template>

<script>
import Calculator from "./main/calculator";
export default {
  components: {Calculator}
};
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
  font-family: "RobotoMono, monospace";
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
  background-image: radial-gradient( circle farthest-corner at 22.4% 21.7%,  rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% );

}
</style>