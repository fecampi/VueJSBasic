<template>
  <div class="category-admin">
    <SmartForm
      id="category-id"
      :mode="mode"
      :resource="category"
      resources="categories"
      @completed="cleanFields"
    >
      <Input
        id="category-name"
        label="Nome: Informe o nome da categoria.."
        v-model="category.name"
        :readonly="mode === 'remove'"
      />
   
    </SmartForm>
    <b-button class="mb-2" v-if="mode === 'list'" @click="mode = 'save'">
      Criar novo usuário
    </b-button>

    <SmartTable
      :mode="mode"
      :resources="categories"
      :fields="fields"
      @completed="loadResource"
    />
  </div>
</template>

<script>
import Input from "../../../components/Input";
import SmartTable from "../../../components/SmartTable";
import SmartForm from "../../../components/SmartForm";

export default {
  name: "CategoryAdmin",
  components: { Input, SmartForm, SmartTable },
  data: function () {
    return {
      mode: "list",
      category: {},
      categories: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "path", label: "Caminho", sortable: true },
      ],
    };
  },
  methods: {
    getResources() {
      this.$axios.get("categories").then((res) => {
        this.categories = res.data.map((category) => {
          return { ...category, value: category.id, text: category.path };
        });
      });
    },
    cleanFields() {
      console.log("oi")
      this.mode = "list";
      this.category = {};
      this.getResources();
    },

    loadResource(resource, mode = "list") {
      this.mode = mode;
      this.category = { ...resource };
    },
  },
  mounted() {
    this.loadResource();
  },
};
</script>

<style>
</style>