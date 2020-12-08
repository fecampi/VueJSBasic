<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario
            :to="{ name: 'editarUsuario', params: { id },
                query: { completo: false, lingua: 'en' },
                hash: '#rodape' }">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        // console.log(this.id)
        console.log('dentro do componente -> usuário detalhe')
        // next(vm => {
        //     console.log(vm.id)
        // })
        const autenticado = true
        autenticado ? next() : next(false)
    }
    //Metodo de identifificar o id (falho)
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    //Metodo de identifificar o id com o watch
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>
