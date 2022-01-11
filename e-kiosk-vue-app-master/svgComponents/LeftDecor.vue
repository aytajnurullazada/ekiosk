<template>
  <div class="flex-box" v-if="mode != 'white'">
    <svg
      width="122"
      height="34"
      viewBox="0 0 122 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="104.971"
        y="1.41421"
        width="22"
        height="22"
        transform="rotate(45 104.971 1.41421)"
        stroke="#232425"
        stroke-width="2"
      />
      <rect
        x="104.971"
        y="8.48526"
        width="12"
        height="12"
        transform="rotate(45 104.971 8.48526)"
        stroke="#232425"
        stroke-width="2"
      />
      <line x1="89" y1="17" y2="17" stroke="#232425" stroke-width="2" />
    </svg>
    <div class="text-box">
      <slot/>
    </div>
  </div>
  <div class="flex-box" v-else-if="mode == 'white'">
    <svg
      width="122"
      height="34"
      viewBox="0 0 122 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="104.971"
        y="1.41421"
        width="22"
        height="22"
        transform="rotate(45 104.971 1.41421)"
        stroke="white"
        stroke-width="2"
      />
      <rect
        x="104.971"
        y="8.48526"
        width="12"
        height="12"
        transform="rotate(45 104.971 8.48526)"
        stroke="white"
        stroke-width="2"
      />
      <line x1="89" y1="17" y2="17" stroke="white" stroke-width="2" />
    </svg>
     <div class="text-box">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "other",
    },
  },
};
</script>

<style scoped>
.flex-box{
  display: flex;
}
</style>