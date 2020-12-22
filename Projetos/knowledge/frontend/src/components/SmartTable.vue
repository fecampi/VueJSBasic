<template>
  <div>
    <b-table
      class="table-sm"
      id="my-table"
      hover
      :items="resources"
      :fields="fields.concat(smartFields)"
      v-if="mode === 'list'"
      :per-page="perPage"
      :current-page="currentPage"
      small
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
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      
    ></b-pagination>
  </div>
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
      perPage: 10,
      currentPage: 1,
    };
  },
  methods: {
    dataToResource(resource) {
      console.log({ ...resource });
    },
  },
  computed: {
    rows() {
      return this.resources.length;
    },
  },
};
</script>

<style>
</style>
