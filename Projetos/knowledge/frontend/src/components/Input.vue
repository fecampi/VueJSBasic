<template>
  <b-form-group
    :label="label.slice(0, this.label.indexOf(':') + 1)"
    :label-for="id"
  >
    <input
      class="form-control"
      :type="type"
      :id="id"
      :placeholder="label.slice(label.indexOf(': ') + 2)"
      :value="value"
      :required="required"
      v-on:input="updateValue($event)"
      :readonly="readonly"
    />
  </b-form-group>
</template>

<script>
export default {
  name: "Input",
  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    required: {
      type: Boolean,
      default: true,
    },
    readonly: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "text",
    },
  },

  methods: {
    updateValue(value) {
      this.$emit("input", value.target.value);
    },
  },
};
</script>