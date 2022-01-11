<template>
  <div class="flex-notifation">
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
        stroke="white"
        stroke-width="1.6"
        stroke-linecap="square"
      />
      <path
        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
        stroke="white"
        stroke-width="1.6"
        stroke-linecap="square"
      />
    </svg>
    <div class="absolute-box" :style="{backgroundColor: circleColor ? circleColor : '#1a1a1a'}">
      <Typography>{{ count }}</Typography>
    </div>
  </div>
</template>

<script>
import Typography from "@/components/common/Typography/";
export default {
  props: {
    circleColor: {
      type: String,
      defualt: '#1a1a1a'
    },
    count: {
      type: [String, Number],
      default: "0",
    },
  },
  components: {
    Typography,
  },
};
</script>

<style  scoped>
.flex-notifation {
  position: relative;
}
.absolute-box {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: #ffffff;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  transition: 0.3s;
  top: 0px;
  right: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>