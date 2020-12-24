<template>
  <div>
    <slot />
    <b-table
      class="table-sm"
      id="my-table"
      hover
      :items="recourses"
      :fields="fields.concat(smartFields)"
      v-if="mode === 'list'"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
      <template slot="cell(actions)" slot-scope="data">
        
        <b-button
          class="mr-2"
          variant="outline-info"
          @click="$emit('click-edit', data.item)"
        >
          <i class="mr-2 fa fa-pencil"></i>
          Editar
        </b-button>
        <b-button
          variant="outline-danger"
          @click="$emit('click-delete', data.item)"
        >
          <i class="fa fa-trash mr-2"></i>
          Remover
        </b-button>
      </template>
    </b-table>
    <b-pagination
      v-if="mode === 'list'"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SmartTable",
  props: {
    recourses: { type: Array },
    fields: { type: Array },
    perPage: { type: Number, default: 5 },
  },
  data: function () {
    return {
      resource: {},
      smartFields: [{ key: "actions", label: "Ações" }],
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.recourses.length;
    },
    ...mapState("menuStatus", ["mode"]),
  },
};
</script>

<style>
</style>
