<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container-fluid">
      <div >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" tag="li" exact>
              <a class="nav-link" active-class="nav-link active" >Início</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/10" tag="li" >
              <a class="nav-link" active-class="nav-link active">Usuário</a>
            </router-link>
          </li>
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
