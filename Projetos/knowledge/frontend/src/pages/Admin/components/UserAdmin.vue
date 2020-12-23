<template>
  <div class="user-admin">
    <SmartForm
      id="user-id"
      :mode="mode"
      :resource="user"
      resources="users"
      @completed="cleanFields"
    >
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
        Administrador
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
    </SmartForm>
    <b-button class="mb-2" v-if="mode === 'list'" @click="setMode('save')">
      <i style="font-size: 30px" class="fas fa-user-plus"></i> Criar novo
      usuário
    </b-button>

    <SmartTable
      :mode="mode"
      :resources="users"
      :fields="fields"
      @completed="loadResource"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import {  mapMutations } from "vuex";

import Input from "../../../components/Input";
import SmartTable from "../../../components/SmartTable";
import SmartForm from "../../../components/SmartForm";

export default {
  name: "UserAdmin",
  components: { Input, SmartForm, SmartTable },
  computed: {
    ...mapState("menuStatus", ["mode"]),
  },
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
    ...mapMutations("menuStatus", ["setMode"]),
    getRecources() {
      this.$axios.get("users").then((res) => {
        this.users = res.data;
      });
    },

    cleanFields() {
      this.setMode("list");
      this.user = {};
      this.getRecources();
    },

    loadResource(resource, mode = "save") {
      this.setMode(mode);
      this.user = { ...resource };
    },
  },

  mounted() {
    this.getRecources();
  },
};
</script>

<style>
</style>
