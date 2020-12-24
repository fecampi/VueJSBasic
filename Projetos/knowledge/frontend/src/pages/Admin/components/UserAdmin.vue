<template>
  <div class="user-admin">
    <SmartForm
      id="user-id"
      :resource="user"
      resources="users"
      @click-back="cleanRecourseAndGetRecoursesInDataBase(user, 'users')"
      @click-save="saveRecourseToDataBase(user, 'users')"
      @click-remove="removeRecourseToDataBase(user, 'users')"
    >
      <b-row>
        <b-col md="6" sm="12">
          <Input
            id="user-name"
            label="Nome: Informe o nome do usuario"
            v-model="user.name"
          />
        </b-col>
        <b-col md="6" sm="12">
          <Input
            id="user-email"
            label="E-mail: Informe o E-mail do Usuário..."
            v-model="user.email"
          />
        </b-col>
      </b-row>
      <b-form-checkbox
        id="user-admin"
        v-show="mode === 'save'"
        v-model="user.admin"
        class="mt-3 mb-3"
      >
        Administrador
      </b-form-checkbox>
      <b-row v-show="mode === 'save'">
        <b-col md="6" sm="12">
          <Input
            id="user-password"
            type="password"
            label="Senha: Informe a Senha do Usuário..."
            v-model="user.password"
          />
        </b-col>
        <b-col md="6" sm="12">
          <Input
            id="user-confirm-password"
            type="password"
            label="Confirmação de Senha: Confirme a Senha do Usuário..."
            v-model="user.confirmPassword"
          />
        </b-col>
      </b-row>
    </SmartForm>
    <b-button
      class="mb-3"
      variant="outline-secondary"
      v-if="mode === 'list'"
      @click="newRecourseView"
    >
      <i style="font-size: 20px" class="fas fa-plus-circle" /> <br />Criar
      usuário
    </b-button>

    <SmartTable
      :recourses="users"
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

export default {
  name: "UserAdmin",
  mixins: [modeMixin],
  components: { Input, SmartForm, SmartTable },
  data: function () {
    return {
      //Tres modos: Deletar, Salvar e Trocar
      // mode: "list",
      user: {},
      users: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin",
          label: "Administrador",
          sortable: true,
          //renderizar sim e não inves de true e
          formatter: (value) => (value ? "Sim" : "Não"),
        },
      ],
    };
  },
  methods: {

    cleanRecourseAndGetRecoursesInDataBase(recourse, recources) {
      this.setMode("list");
      this.recourse = {};
      this.$axios.get(recources).then((res) => {
        this.users = res.data;
      });
    },

    newRecourseView() {
      this.setMode("save");
      this.user = {};
    },

    viewSave(recource) {
      this.setMode("save");
      this.user = { ...recource };
    },

    viewRemove(recource) {
      console.log()
      this.setMode("remove");
      this.user = { ...recource };
    },

    saveRecourseToDataBase(recource, recources) {
      const method = recource.id ? "put" : "post";
      const id = recource.id ? `/${recource.id}` : "";
      this.$axios[method](`${recources}${id}`, recource)
        .then(() => {
          this.$showSuccess();
          this.cleanRecourseAndGetRecoursesInDataBase(recource, recources);
        })
        .catch(this.$showError);
    },

    removeRecourseToDataBase(recource, recources) {
      const id = recource.id;
      this.$axios
        .delete(`${recources}/${id}`)
        .then(() => {
          this.$showSuccess();
          this.cleanRecourseAndGetRecoursesInDataBase(recource, recources);
        })
        .catch(this.$showError);
    },
  },

  mounted() {
    this.cleanRecourseAndGetRecoursesInDataBase(this.user, 'users');
  },
};
</script>

<style>
</style>
