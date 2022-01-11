<template>
  <svg
   @click="$emit('click')"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 12C2 12 5.63636 4.72729 12 4.72729C18.3636 4.72729 22 12 22 12C22 12 18.3636 19.2727 12 19.2727C5.63636 19.2727 2 12 2 12Z"
      :stroke="color"
      stroke-width="1.4"
      stroke-linecap="round"
    />
    <path
      d="M12 14.7273C13.5062 14.7273 14.7273 13.5062 14.7273 12C14.7273 10.4937 13.5062 9.27271 12 9.27271C10.4937 9.27271 9.27271 10.4937 9.27271 12C9.27271 13.5062 10.4937 14.7273 12 14.7273Z"
      :stroke="color"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
    default: "#505050",
    type: String
    }
  }
};
</script>

<style scoped>
</style>