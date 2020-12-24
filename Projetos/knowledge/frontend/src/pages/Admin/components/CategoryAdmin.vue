<template>
  <div class="category-admin">
    <SmartForm
      id="category-id"
      :resource="category"
      resources="categories"
      @click-back="cleanRecourseAndGetRecoursesInDataBase(category, 'categories')"
      @click-save="saveRecourseToDataBase(category, 'categories')"
      @click-remove="removeRecourseToDataBase(category, 'categories')"
    >
      <b-row>
        <b-col md="6" sm="12">
          <Input
            id="category-name"
            label="Nome: Informe o nome da categoria.."
            v-model="category.name"
          />
        </b-col>
        <b-col md="6" sm="12">
          <Select
            id="category-parentId"
            label="Categoria Pai:"
            slug="path"
            :recource="category"
            :recources="categories"
            v-model="category.parentId"
          />
        </b-col>
      </b-row>
    </SmartForm>

    <b-button
      class="mb-3"
      variant="outline-secondary"
      v-if="mode === 'list'"
      @click="setMode('save')"
    >
      <i style="font-size: 20px" class="fas fa-plus-circle" /> <br />Criar
      Categoria
    </b-button>

    <SmartTable
      :recourses="categories"
      :fields="fields"
      @click-button-edit="viewSave"
      @click-button-delete="viewRemove"
    />
  </div>
</template>

<script>
import modeMixin from "../../../mixers/modeMixin";
import Input from "../../../components/Input";
import SmartTable from "../../../components/SmartTable";
import SmartForm from "../../../components/SmartForm";
import Select from "../../../components/Select";
export default {
  name: "CategoryAdmin",
  mixins: [modeMixin],
  components: { Input, SmartForm, SmartTable, Select },
  data: function () {
    return {
      category: {},
      categories: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "path", label: "Caminho", sortable: true },
      ],
    };
  },
  mounted() {
    this.cleanRecourseAndGetRecoursesInDataBase(this.category, 'categories');
  },
};
</script>

<style>
</style>
