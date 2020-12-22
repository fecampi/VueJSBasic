<template>
  <div class="user-admin">
    <b-form v-if="mode !== 'list'">
      <!-- input escondido -->
      <input id="user-id" type="hidden" v-model="user.id" />
      <b-row>
        <b-col md="6" sm="12">
          <Input
            id="user-name"
            label="Nome: Informe o nome do usuario"
            v-model="user.name"
            :readonly="mode === 'remove'"
          />
        </b-col>
        <b-col md="6" sm="12">
          <Input
            id="user-email"
            label="E-mail: Informe o E-mail do Usuário..."
            v-model="user.email"
            :readonly="mode === 'remove'"
          />
        </b-col>
      </b-row>
      <b-form-checkbox
        id="user-admin"
        v-show="mode === 'save'"
        v-model="user.admin"
        class="mt-3 mb-3"
      >
        Administrador ?
      </b-form-checkbox>
      <b-row v-show="mode === 'save'">
        <b-col md="6" sm="12">
          <Input
            id="user-password"
            type="password"
            label="Senha: Informe a Senha do Usuário..."
            v-model="user.password"
            :readonly="mode === 'remove'"
          />
        </b-col>
        <b-col md="6" sm="12">
          <Input
            id="user-confirm-password"
            type="password"
            label="Confirmação de Senha: Confirme a Senha do Usuário..."
            v-model="user.confirmPassword"
            :readonly="mode === 'remove'"
          />
        </b-col>
      </b-row>

      <SmartCud
        :mode="mode"
        @completed="SmartCudCompleted"
        :resource="user"
        resources="users"
      />
      <br />
    </b-form>
    <b-button class="mt-2 mb-2" v-if="mode === 'list'" @click="mode = 'save'"
      >Criar novo usuário</b-button
    >
    <b-table
      class="table-sm"
      hover
      :items="users"
      :fields="fields"
      v-if="mode === 'list'"
    >
      <template slot="cell(actions)" slot-scope="data">
        <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadUser(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import Input from "../../../components/Input";
import SmartCud from "../../../components/SmartCud";
export default {
  name: "UserAdmin",
  components: { Input, SmartCud },
  data: function () {
    return {
      //Tres modos: Deletar, Salvar e Trocar
      mode: "list",
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
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadUsers() {
      this.$axios.get("users").then((res) => {
        this.users = res.data;
        console.log(this.users)
      });
    },

    SmartCudCompleted() {
      this.mode = "list";
      this.user = {};
      this.loadUsers();
    },

    loadUser(user, mode = "save") {
      this.mode = mode;
      this.user = { ...user };
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style>
</style>
