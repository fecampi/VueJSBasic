<template>
  <b-form-group :label="label" :label-for="id">
    <b-form-select v-model="selected">
      <option :value="null">Nenhum</option>
      <option
        v-for="option in recources"
        :key="option.id"
        :value="option.id.toString()"
      >
        {{ option[slug]}}
      </option>
    </b-form-select>
  </b-form-group>
</template>

<script>
export default {
  props: {
    recources: { type: Array },
    value: String,
    label: String,
    id: String,
    slug: String,
  },
  computed: {
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

