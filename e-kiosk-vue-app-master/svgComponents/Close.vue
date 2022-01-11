<template>
  <svg
   @click="$emit('click')"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 5L5 15"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="square"
    />
    <path
      d="M5 5L15 15"
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
            default: "#848484"
        }
    }
};
</script>

<style lang="scss" scoped>
</style>