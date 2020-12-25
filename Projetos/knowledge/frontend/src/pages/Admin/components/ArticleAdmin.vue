<template>
  <div class="article-admin">
    <SmartForm
      id="article-id"
      :recource="article"
      recources="articles"
      @click-back="cleanRecourseAndGetRecoursesInDataBase(article, 'articles')"
      @click-save="saveRecourseToDataBase(article, 'articles')"
      @click-remove="removeRecourseToDataBase(article, 'articles')"
    >
      <b-row>
        <b-col md="6" sm="12">
          <Input
            id="article-name"
            label="Nome: Informe o nome do artigo"
            v-model="article.name"
          />
        </b-col>
        <b-col md="6" sm="12">
          <Input
            id="article-description"
            label="Descrição: Informe a Descrição do Artigo"
            v-model="article.description"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <Input
            id="article-imageUrl"
            label="Imagem (URL): Informe a URL da Imagem..."
            v-model="article.imageUrl"
          />
        </b-col>
        <b-col md="4" sm="12">
          <Select
            id="article-userId"
            label="Autor:"
            slug="name"
            :recource="article"
            :recources="users"
            v-model="article.userId"
          />
        </b-col>
        <b-col md="4" sm="12">
          <Select
            id="article-categoryId"
            label="Categoria:"
            slug="name"
            :recource="article"
            :recources="categories"
            v-model="article.categoryId"
          />
        </b-col>
      </b-row>
      <b-form-group
        v-if="mode === 'save'"
        label="Conteúdo"
        label-for="article-content"
      >
        <VueEditor
          v-model="article.content"
          placeholder="Informe o Conteúdo do Artigo..."
        />
      </b-form-group>
    </SmartForm>
    <b-button
      class="mb-3"
      variant="outline-secondary"
      v-if="mode === 'list'"
      @click="newRecourseView('article')"
    >
      <i style="font-size: 20px" class="fas fa-plus-circle" /> <br />Criar
      Artigo
    </b-button>
    <SmartTablePagination
      recource="article"
      :recourses="articles"
      :total-rows=countUpdate
      :per-page="limit"
      :fields="fields"
      @click-button-edit="viewSave"
      @click-button-delete="viewRemove"
    />
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import modeMixin from "../../../mixers/modeMixin";
import Select from "../../../components/Select";
import SmartTablePagination from "../../../components/SmartTablePagination";
import Input from "../../../components/Input";
import SmartForm from "../../../components/SmartForm";
export default {
  name: "ArticleAdmin",
  components: { SmartTablePagination, SmartForm, Input, Select, VueEditor },
  mixins: [modeMixin],
  data: function () {
    return {
      limit: 0,
      count: 0,
      page: 1,

      article: {},
      articles: [],
      categories: [],

      users: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "description", label: "Descrição", sortable: true },
      ],
    };
  },
  methods: {
    loadArticles() {
      this.$axios.get(`articles?page=${this.page}`).then((res) => {
        this.articles = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
        console.log(this.count);
      });
    },

    loadCategories() {
      this.$axios.get("categories").then((res) => {
        this.categories = res.data;
      });
    },
    loadUsers() {
      this.$axios.get("users").then((res) => {
        this.users = res.data;
      });
    },
  },
  computed: {
    countUpdate() {
      return this.count !== undefined ? this.count : undefined;
    },
  },

  mounted() {
    this.loadUsers();
    this.loadCategories();
    this.loadArticles();
  },
};
</script>

<style>
</style>