<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 6L9 12L15 18"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="square"
    />
  </svg>
</template>

<script>
export default {
  props: {
    height: {
      type: [String, Number],
      default: "1em",
    },
    width: {
      type: [String, Number],
      default: "1em",
    },
    color: {
      type: String,
      default: "#ffffff",
    },
  },
};
</script>

<style  scoped>
</style>