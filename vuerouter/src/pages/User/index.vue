<template>
  <div class="usuario">
        
    <router-view />
<Go to="Home"> Voltar </Go>
  </div>
</template>

<script>
import Go from "../../shared/components/Go";
export default {
  components: { Go },
};
</script>

<style></style>
