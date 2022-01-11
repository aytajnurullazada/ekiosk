<template>
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3333 4L5.99999 11.3333L2.66666 8"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="square"
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