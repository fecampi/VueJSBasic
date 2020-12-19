<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema"
            sub="Cadastros & Cia" />
        <div class="admin-pages-tabs">
    
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Artigos" active>
     
                    </b-tab>
                    <b-tab title="Categorias">
              
                    </b-tab>
                    <b-tab title="Usuários">
                      
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../../components/template/PageTitle'


export default {
    name: 'AdminPages',
    components: { PageTitle}
}
</script>

<style>

</style>
