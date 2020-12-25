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
  },
  data: function () {
    return {
      smartFields: [{ key: "actions", label: "Ações" }],
    };
  },
  computed: {
    ...mapState("menuStatus", ["mode"]),
  },
};
</script>

<style>
</style>