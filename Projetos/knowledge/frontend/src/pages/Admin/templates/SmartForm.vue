<template>
  <div class="smart-form">
    <b-form v-if="mode !== 'list'">
      <slot />
      <hr />
      <!-- input escondido -->
      <input :id="id" type="hidden" v-model="[recource].id" />

      <b-row>
        <b-col xs="12">
          <b-button
            class="mr-2"
            @click="$emit('click-back')"
            variant="outline-secondary"
          >
            <i class="mr-2 fas fa-step-backward"></i>
            Voltar
          </b-button>

          <b-button
            variant="outline-primary"
            v-if="mode === 'save'"
            @click="$emit('click-save')"
          >
            <i class="mr-2 fas fa-save" />Salvar
          </b-button>

          <b-button
            variant="outline-danger"
            v-if="mode === 'remove'"
            @click="$emit('click-remove')"
          >
            <i class="mr-2 fas fa-trash-alt" />Excluir
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SmartCud",
  props: {
    id: { type: String },
    recource: { type: Object },
    recources: { type: String },
    smartCudCompleted: Function,
  },

  computed: {
    ...mapState("menuStatus", ["mode"]),
  },
};
</script>

<style>
</style>