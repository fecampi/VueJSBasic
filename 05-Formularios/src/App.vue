<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <div class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <NomeCompleto v-model="nomeCompleto" />
        <Rotulo nome="E-mail">
          <input type="text" v-model.lazy.trim="user.email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="user.senha" />
        </Rotulo>
        <Rotulo nome="Idade">
          <input type="number" v-model.number="user.idade" />
        </Rotulo>
        <Rotulo nome="Mensagem">
          <textarea
            name=""
            cols="30"
            rows="5"
            v-model="user.mensagem"
          ></textarea>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span class="mr-4"
            ><input
              type="checkbox"
              v-model="user.caracteristicas"
              value="reproduzivel"
            />
            Reproduzível</span
          >
          <span
            ><input
              type="checkbox"
              v-model="user.caracteristicas"
              value="intermitente"
            />
            Intermitente</span
          >
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span class="mr-4"
            ><input type="radio" value="web" v-model="user.produto" /> Web</span
          >
          <span class="mr-4"
            ><input type="radio" value="mobile" v-model="user.produto" />
            Mobile</span
          >
          <span
            ><input type="radio" value="outro" v-model="user.produto" />
            Outro</span
          >
        </Rotulo>
        <Rotulo nome="Prioridade">
          <select v-model="prioridade">
            <option
              v-for="prioridade in prioridades"
              :value="prioridade.codigo"
              :key="prioridade.codigo"
              :selected="prioridade.codigo === 3"
            >
              {{ prioridade.codigo }} - {{ prioridade.nome }}
            </option>
          </select>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <Escolha v-model="user.escolha" />
        </Rotulo>
        <hr />
        <button @click.prevent="enviar">Enviar</button>
      </div>
      <!-- Resultado -->
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          <span>{{ nomeCompleto.nome }}</span>
        </Rotulo>
        <Rotulo nome="Sopbrenome">
          <span>{{ nomeCompleto.sobrenome }}</span>
        </Rotulo>
        <Rotulo nome="E-mail">
          <span>{{ user.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ user.senha }}</span>
        </Rotulo>
        <Rotulo nome="Idade">
          <span>{{ user.idade }} </span>
        </Rotulo>
        <Rotulo nome="Mensagem">
          <span>{{ user.mensagem }}</span>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span>
            <ul>
              <li v-for="c in user.caracteristicas" :key="c">{{ c }}</li>
            </ul>
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span>{{ user.produto }}</span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <span>{{ prioridade }} </span>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <span>{{ user.escolha }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import NomeCompleto from "./components/NomeCompleto.vue";
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha, NomeCompleto },

  methods: {
    enviar() {
      this.enviado = true;
    },
  },
  data() {
    return {
      nomeCompleto: {
        nome: "",
        sobrenome: "",
      },
      produto: "web",
      prioridade: 1,
      prioridades: [
        { codigo: 1, nome: "Baixa" },
        { codigo: 2, nome: "Moderada" },
        { codigo: 3, nome: "Alta" },
      ],
      user: {
        email: "",
        senha: "",
        idade: 25,
        caracteristicas: [],
        mensagem: "",
        produto: "web",
        escolha: true,
      },
      escolha: true,
      enviado: false,
    };
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

.painel button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
