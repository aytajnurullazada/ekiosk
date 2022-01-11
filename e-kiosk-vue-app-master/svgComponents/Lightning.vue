<template>
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.4609 3.37502L4.83594 20.925H17.9984L16.5359 32.625L31.1609 15.075H17.9984L19.4609 3.37502Z"
      :stroke="color"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
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