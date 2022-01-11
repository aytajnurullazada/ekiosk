<template>
  <div class="alert" :mode="mode" v-if="isShow">
    <div class="circle-icon">
      <Check v-if="mode == 'success'" />
      <Exclamation v-else />
    </div>
    <div class="text-box">
      <Typography>
        {{ text }}
      </Typography>
    </div>
    <div class="absolute-right-box" @click="isShow = false, $emit('closed')">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L4 12"
          stroke="#484848"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M4 4L12 12"
          stroke="#484848"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import Check from "@/svgComponents/Check";
import Typography from "@/components/common/Typography/";
import Exclamation from "@/svgComponents/Exclamation";
export default {
  components: {
    Check,
    Typography,
    Exclamation,
  },
  data(){
      return {
          isShow: false
      }
  },
  watch: {
    isShowProp(value){
        this.isShow = value;
    }  
  },
  mounted(){
    this.isShow = this.isShowProp;
  },
  props: {
    isShowProp: {
        type: Boolean,
        default: false
    },
    mode: {
      type: String,
      default: "success",
    },
    text: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style scoped>
.alert {
  width: 100%;
  padding-left: 24px;
  min-height: 56px;
  display: flex;
  align-items: center;
  padding-right: 54px;
}
.alert::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 8px;
  top: 0;
}
.circle-icon {
  width: 24px;
  min-width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 16px;
  margin-right: 16px;
}
.absolute-right-box {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.alert[mode="success"]::after,
.alert[mode="success"] .circle-icon {
  background-color: #3ac267;
}
.alert[mode="error"]::after,
.alert[mode="error"] .circle-icon {
  background-color: #ec3137;
}
.alert[mode="warning"]::after,
.alert[mode="warning"] .circle-icon {
  background-color: #f69f29;
}
.alert[mode="success"] {
  background-color: #dff5e7;
}
.alert[mode="warning"] {
  background-color: #fef0dd;
}
.alert[mode="error"] {
  background-color: #fcdedf;
}
.text-box {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #1a1a1a;
}
</style>