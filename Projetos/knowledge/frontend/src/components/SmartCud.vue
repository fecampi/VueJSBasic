<template>
  <div class="user-admin">
    <b-row>
      <b-col xs="12">
        <b-button class="mr-2" @click="$emit('completed')">Voltar</b-button>
        <b-button
          variant="primary"
          v-if="mode === 'save'"
          @click="save(resource, resources)"
          >Salvar</b-button
        >
        <b-button variant="danger" v-if="mode === 'remove'" @click="remove()"
          >Excluir</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "SmartCud",
  props: {
    resource: { type: Object },
    resources: { type: String },
    smartCudCompleted: Function,
    mode: { type: String },
  },

  methods: {
    save(resource, resources) {
      const method = resource.id ? "put" : "post";
      const id = resource.id ? `/${resource.id}` : "";
      this.$axios[method](`${resources}${id}`, resource)
        .then(() => {
          this.$showSuccess();
          this.$emit("completed");
        })
        .catch(this.$showError);
    },
    remove() {
       const id = this.resource.id;
       this.$axios
        .delete(`${this.resources}/${id}`)
        .then(() => {
          this.$showSuccess();
          this.$emit("completed");
        })
        .catch(this.$showError);
    },

 
    // remove(resource, resources) {
    //   const id = resource.id;
    //   this.$axios
    //     .delete(`${resources}/${id}`)
    //     .then(() => {
    //       this.$showSuccess();
    //       this.$emit("completed");
    //     })
    //     .catch(this.$showError);
    // },
  },
};
</script>

<style>
</style>
