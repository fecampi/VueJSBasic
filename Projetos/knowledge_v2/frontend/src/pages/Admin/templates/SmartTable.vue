<template>
  <div>
    <slot />
    <b-table
      id="my-table"
      class="table-sm"
      hover
      :items="recourses"
      :fields="fields.concat(smartFields)"
      v-if="mode === 'list'"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template slot="cell(actions)" slot-scope="data">
        <b-button
          class="mr-2"
          variant="outline-info"
          @click="$emit('click-button-edit', data.item, recource)"
        >
          <i class="mr-2 fa fa-pencil"></i>
          Editar
        </b-button>
        <b-button
          variant="outline-danger"
          @click="$emit('click-button-delete', data.item, recource)"
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
    recource: { type: String },
    recourses: { type: Array },
    fields: { type: Array },
    perPage: { type: Number, default: 5 },
  },
  data: function () {
    return {
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