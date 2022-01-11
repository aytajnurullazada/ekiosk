<template>
  <button :disabled="isDisabled" class="blue-btn" @click="$emit('click')">
    <slot />
    <div class="absolute-icon" v-if="icon">
      <ArrowRight width="16px" height="28px" />
    </div>
  </button>
</template>

<script>
import ArrowRight from "@/svgComponents/ArrowRight";
export default {
  props: {
    icon: {
      type: Boolean,
      default: true
    },
    isDisabled: {
       type: Boolean,
       default: false
    }
  },
  components: {
    ArrowRight
  },
};
</script>

<style scoped>
.blue-btn {
  background: #5387ed;
  width: 100%;
  height: 56px;
  position: relative;
  text-align: center;
  color: white;
  padding-left: 0;
  padding-right: 0;
  border: none;
  transition: 0.3s;
}
.blue-btn:not(:disabled):hover{
  transition: 0.3s;
  opacity: 0.6;
}
.blue-btn:disabled{
  cursor: no-drop;
  opacity: 0.6;
}
.blue-btn::disabled{
  filter: brightness(60%);
  transition: 0.3s;
}
.blue-btn .absolute-icon {
  position: absolute;
  right: 20px;
  font-size: 16px;
  top: 50%;
  transform: translateY(-50%);
}

@media screen and (max-width: 500px) {
  .blue-btn {
    height: 48px;
    background-color: #505050;
  }

}
</style>