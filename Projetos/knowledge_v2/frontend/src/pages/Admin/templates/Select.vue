<template>
  <b-form-group :label="label" :label-for="id">
    <b-form-select v-if="mode === 'save'" v-model="selected">
      <option :value="null">Nenhum</option>
      <option v-for="option in recources" :key="option.id" :value="option.id">
        {{ option[slug] }}
      </option>
    </b-form-select>
    <input
      v-else
      class="form-control"
      value="value"
      readonly
      v-model="recource[slug]"
    />
  </b-form-group>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    recources: { type: Array },
    recource: { type: Object },
    value: Number,
    label: String,
    id: String,
    slug: String,
  },
  computed: {
    ...mapState("menuStatus", ["mode"]),

    selected: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
};
</script>

