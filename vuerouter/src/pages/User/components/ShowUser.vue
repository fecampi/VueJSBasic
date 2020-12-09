<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Usuario</strong> {{id}}</p>
           <!-- :to="`/usuario/${id}/editar`" -->
                <router-link tag="button" primario
            :to="{ path: '/user/edit/', params: { id },
                query: { completo: false, lingua: 'en' },
                hash: '#rodape' }">
            Editar
        </router-link>
       
    </div>
</template>

<script>
export default {
    props: ['id'],
  
}
</script>

<style>

</style>
