<template>
  <div class="article-admin">
    <b-form v-if="mode !== 'list'">
      <input id="article-id" type="hidden" v-model="article.id" />
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
          <b-form-group
            label="Categoria:"
            label-for="article-categoryId"
          >
            <b-form-select
              id="article-categoryId"
              :options="categories"
              v-model="article.categoryId"
            />
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12">
          <b-form-group
            label="Autor:"
            label-for="article-userId"
          >
            <b-form-select
              id="article-userId"
              :options="users"
              v-model="article.userId"
            />
          </b-form-group>
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

      <b-row>
        <b-col xs="12">
          <b-button class="mr-2" @click="reset" variant="outline-secondary">
            <i class="mr-2 fas fa-step-backward"></i>
            Voltar
          </b-button>

          <b-button
            variant="outline-primary"
            v-if="mode === 'save'"
            @click="save"
          >
            <i class="mr-2 fas fa-save" />Salvar
          </b-button>

          <b-button
            variant="outline-danger"
            v-if="mode === 'remove'"
            @click="remove"
          >
            <i class="mr-2 fas fa-trash-alt" />Excluir
          </b-button>
        </b-col>
      </b-row>
    </b-form>
    <b-button
      class="mb-3"
      variant="outline-secondary"
      v-if="mode === 'list'"
      @click="newCategory"
    >
      <i style="font-size: 20px" class="fas fa-plus-circle" /> <br />Criar
      Artigo
    </b-button>
    <div id="smartTable" v-if="mode == 'list'">
      <b-table
        class="table-sm"
        hover
        striped
        :items="articles"
        :fields="fields"
      >
        <template slot="cell(actions)" slot-scope="data">
          <b-button
            class="mr-2"
            variant="outline-info"
            @click="loadArticle(data.item)"
          >
            <i class="mr-2 fa fa-pencil"></i>
            Editar
          </b-button>
          <b-button
            variant="outline-danger"
            @click="loadArticle(data.item, 'remove')"
          >
            <i class="fa fa-trash mr-2"></i>
            Remover
          </b-button>
        </template>
      </b-table>

      <b-pagination
        size="md"
        v-model="page"
        :total-rows="count"
        :per-page="limit"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

import { VueEditor } from "vue2-editor";
import Input from "../../../components/Input";
export default {
  name: "ArticleAdmin",
  components: { VueEditor, Input },
  data: function () {
    return {
      article: {},
      articles: [],
      categories: [],
      users: [],
      page: { type: Number },

      limit: 0,
      count: 0,
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "description", label: "Descrição", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },

  methods: {
    ...mapMutations("menuStatus", ["setMode"]),
    loadArticles() {
      const url = `articles?page=${this.page}`;
      this.$axios.get(url).then((res) => {
        this.articles = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      });
    },

    newCategory() {
      this.setMode("save");
      this.article = {};
      this.loadArticles();
    },

    reset() {
      this.setMode("list");
      this.article = {};
      this.loadArticles();
    },
    save() {
      const method = this.article.id ? "put" : "post";
      const id = this.article.id ? `/${this.article.id}` : "";
      this.$axios[method](`articles${id}`, this.article)
        .then(() => {
          this.$showSuccess();
          this.reset();
        })
        .catch(this.$showError);
    },
    remove() {
      const id = this.article.id;
      this.$axios
        .delete(`articles/${id}`)
        .then(() => {
          this.$showSuccess();
          this.reset();
        })
        .catch(this.$showError);
    },
    loadArticle(article, mode = "save") {
      this.setMode(mode);
      this.article = { ...article };
      const id = article.id;
      this.$axios
        .get(`articles/${id}`)
        .then((res) => (this.article = res.data));
    },

    loadCategories() {
      this.$axios.get("categories").then((res) => {
        this.categories = res.data.map((category) => {
          return { value: category.id, text: category.path };
        });
      });
    },
    loadUsers() {
      this.$axios.get("users").then((res) => {
        this.users = res.data.map((user) => {
          return { value: user.id, text: `${user.name} - ${user.email}` };
        });
      });
    },
  },
  watch: {
    page() {
      this.loadArticles();
    },
  },
  mounted() {
    this.loadUsers();
    this.loadCategories();
    this.loadArticles();
  },
  computed: {
    ...mapState("menuStatus", ["mode"]),
  },
};
</script>

<style>
</style>
  