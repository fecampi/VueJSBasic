<template>
  <div class="user-admin">
    <SmartForm
      id="user-id"
      :recource="user"
      recources="users"
      @click-back="cleanRecourseAndGetRecoursesInDataBase(user,'users')"
      @click-save="saveRecourseToDataBase(user,'users')"
      @click-remove="removeRecourseToDataBase(user,'users')"
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
      @click="newRecourseView('user')"
    >
      <i style="font-size: 20px" class="fas fa-plus-circle" /> <br />Criar
      usuário
    </b-button>

    <SmartTable
      recource="user"
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
  mounted() {
    this.cleanRecourseAndGetRecoursesInDataBase(this.user, 'users');
  },
};
</script>

<style>
</style>