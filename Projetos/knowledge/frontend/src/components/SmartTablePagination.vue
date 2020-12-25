<template>
  <div>
    <slot />
    <b-table

      small
      hover
      :items="recourses"
      :fields="fields.concat(smartFields)"
      v-if="mode === 'list'"

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
      total-rows="count"
      :per-page="perPage"
 
    ></b-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SmartTable",
  props: {
    limit: { type: Number },
    count: { type: Number },
    page: { type: Number },
    perPage: { type: Number },

    recource: { type: String },
    recourses: { type: Array },
    fields: { type: Array },
  },
  data: function () {
    return {
      smartFields: [{ key: "actions", label: "Ações" }],
      currentPage: 1,
    };
  },
  computed: {
    ...mapState("menuStatus", ["mode"]),
  },
};
</script>

<style>
</style>