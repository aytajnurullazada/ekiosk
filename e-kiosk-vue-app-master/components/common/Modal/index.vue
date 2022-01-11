<template>
  <transition name="fade" mode="out-in">
    <div class="modal-parent" v-if="show">
      <div class="bg-modal" @click="show = !show, $emit('closed')"></div>
      <div class="content-modal">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isShow(value) {
      this.show = value;
    },
  },
  mounted(){
      let thisIs = this;
      this.$root.$on('closeModal', function(){
          thisIs.show = false;
          thisIs.$emit('closed');
      });
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: 0.6s;
}
.content-modal {
  position: absolute;
  z-index: 999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.bg-modal {
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 9;
  top: 0;
  background-color: black;
  opacity: 0.8;
  height: 100%;
}
.modal-parent {
  width: 100%;
  height: 100vh;
  z-index: 99999;
  position: fixed;
  left: 0;
  top: 0;
}
</style>