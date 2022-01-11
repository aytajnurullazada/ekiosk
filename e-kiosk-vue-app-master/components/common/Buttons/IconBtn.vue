<template>
  <button :disabled="isDisabled" class="blue-btn" :class="{transparent}" @click="$emit('click')" :mode="mode">
     <div class="icon-item">
       <slot name="icon"/>
    </div>
    <div class="slot-box" :class="{noIcon: !icon}" v-if="!onlyIcon">
        <slot />
    </div>
  </button>
</template>

<script>
import ArrowRight from "@/svgComponents/ArrowRight";
export default {
  components: {
    ArrowRight
  },
  props: {
       icon: {
         type: Boolean,
          default: true
       },
      onlyIcon: {
          type: Boolean,
          default: false
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      transparent: {
          type: Boolean,
          default: false
      },
      mode: {
          type: String,
          default: 'blue'
      }
  }
};
</script>

<style scoped>
.slot-box:not(.noIcon){
    margin-left: 10px;
}
.blue-btn{
  width: 100%;
  height: 56px;
  justify-content: center;
  position: relative;
  text-align: center;
  color: white;
  padding-left: 0;
  padding-right: 0;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  white-space: nowrap;
  transition: 0.3s;
}
.blue-btn[mode="blue"] {
    border: 1px solid #5387ed;
  background: #5387ed;
}
.blue-btn[mode="dark"] {
  border: 1px solid #505050;
  background: #1A1A1A;
}
.blue-btn.transparent[mode="dark"], .blue-btn.transparent[mode="blue"] {
    background: transparent !important;
}

.blue-btn .icon-item {
  display: flex;
    font-size: 20px;
}
.blue-btn:not(:disabled):hover {
  filter: brightness(80%);
  transition: 0.3s;
}
.blue-btn:disabled{
  cursor: no-drop;
  opacity: 0.6;
}
.blue-btn::disabled{
  filter: brightness(60%);
  transition: 0.3s;
}
@media screen and (max-width: 500px) {
  .blue-btn {
    height: 48px;
    background-color: #505050;
  }

}
</style>