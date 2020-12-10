<template>
  <nav class="navbar-block navbar-expand navbar-dark bg-dark sticky-top">
    <div class="container-fluid ">
      <div>
        <ul class="navbar-nav">
          <!-- tag="li" -> a tag router passa a ser li -->
          <router-link tag="li" class="nav-item" to="/" exact>
            <a class="nav-link" active-class="nav-link active">Início</a>
          </router-link>

          <router-link tag="li" class="nav-item" to="/user">
            <a class="nav-link" active-class="nav-link active">Usuários</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
