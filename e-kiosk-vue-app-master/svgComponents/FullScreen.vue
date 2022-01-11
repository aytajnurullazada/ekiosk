<template>
<svg   :width="width"
    :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3H21V9" :stroke="color" stroke-width="1.6" stroke-linecap="square"/>
<path d="M9 21H3V15" :stroke="color" stroke-width="1.6" stroke-linecap="square"/>
<path d="M20 4L14 10" :stroke="color" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M4 20L10 14" :stroke="color" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"/>
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