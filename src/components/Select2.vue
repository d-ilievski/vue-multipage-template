<template>
  <select ref="select2">
    <slot></slot>
  </select>
</template>

<script>
import { $ } from "jquery";
import("select2");

export default {
  name: "Select2",
  el: '#app',
  props: {
    options: Object,
    value: String
  },
  mounted() {
    const el = this.$refs["select2"];

    if (el) {
      $(el).select2();
    }
  }
};
</script>

<style>
</style>