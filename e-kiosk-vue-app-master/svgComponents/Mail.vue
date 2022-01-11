<template>
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5.33337H29.6667V26.6667H3V5.33337Z"
      :stroke="color"
      stroke-width="1.4"
      stroke-linecap="round"
    />
    <path
      d="M29 6L16 15.3333L3 6"
      :stroke="color"
      stroke-width="1.4"
      stroke-linecap="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white'
    }
  }
};
</script>

<style  scoped>
</style>