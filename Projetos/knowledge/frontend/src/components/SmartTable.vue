<template>
  <b-table
    class="table-sm"
    hover
    :items="resources"
    :fields="fields.concat(smartFields)"
    v-if="mode === 'list'"
  >
    <template slot="cell(actions)" slot-scope="data">
      <b-button
        variant="warning"
        @click="$emit('completed', data.item)"
        class="mr-2"
      >
        <i class="fa fa-pencil"></i>
      </b-button>
      <b-button
        variant="danger"
        @click="$emit('completed', data.item, 'remove')"
      >
        <i class="fa fa-trash"></i>
      </b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "SmartTable",
  props: {
    resources: { type: Array },
    mode: { type: String },
    fields: { type: Array },
  },
  data: function () {
    return {
      resource: {},
      smartFields: [{ key: "actions", label: "Ações" }],
    };
  },
  methods: {
    dataToResource(resource) {
      console.log({ ...resource });
    },
  },
};
</script>

<style>
</style>
