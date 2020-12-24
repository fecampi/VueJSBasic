<template>
  <div class="admin-pages">
    <PageTitle
      icon="fa fa-cogs"
      main="Administração do Sistema"
      sub="Cadastros & Cia"
    />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <!-- <b-tab title="Artigos" >
            <ArticleAdmin />
          </b-tab>
          <b-tab title="Categorias">
            <CategoryAdmin />
          </b-tab> -->
          <b-tab title="Usuários" active>
            <UserAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../components/template/PageTitle";
// import ArticleAdmin from "./components/ArticleAdmin";
// import CategoryAdmin from "./components/CategoryAdmin";
import UserAdmin from "./components/UserAdmin";

export default {
  name: "AdminPages",
  components: { PageTitle, UserAdmin },
};
</script>

<style>
</style>
