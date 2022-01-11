<template>
  <div class="custom-select" :class="{ active: isOpen, notOpen: isDisabled }">
    <div class="head-select" :class="{transparent}" @click="!isDisabled ? isOpen = !isOpen : false">
      <div class="title-select">
        <Typography>{{
          !selectData ? placeholder : selectData[selectKey]
        }}</Typography>
      </div>
      <div class="head-icon">
        <ArrowDown />
      </div>
    </div>
    <div class="content-box">
      <div class="item-box" @click="selectData = item, isOpen = false, $emit('selected', item)" v-for="(item, index) in data" :key="index">
        {{ item[selectKey] }}
      </div>
    </div>
  </div>
</template>

<script>
import Typography from "@/components/common/Typography/";
import ArrowDown from "@/svgComponents/ArrowDown";
export default {
  props: {
    placeholder: {
      type: [String, Number],
      default: "Default placeholder",
    },
    transparent: {
      type: Boolean,
      default: true
    },
    selectKey: {
      type: [String, Number],
      default: "id",
    },
    isDisabled:{
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      isOpen: false,
      selectData: null,
    };
  },
  watch: {
    isDisabled(){
      this.selectData = null;
      this.isOpen = false;
    }
  },
  mounted() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    });
  },
  components: {
    ArrowDown,
    Typography,
  },
};
</script>

<style scoped>
.custom-select.active .content-box {
  opacity: 1;
  pointer-events: all;
}
.custom-select.notOpen{
  cursor: no-drop !important;
  opacity: 0.6 !important;
}
.content-box {
  width: 100%;
  opacity: 0;
  pointer-events: none;
  max-height: 200px;
  overflow: auto;
  transition: 0.3s;
  border: 1px solid #505050;
  border-top: none;
  background-color: #272727;
  position: absolute;
  top: 100%;
  z-index: 9999;
}
.custom-select {
  width: 100%;
  position: relative;
}
.head-select {
  display: flex;
  cursor: pointer;
  width: 100%;
  background: #1a1a1a;
  height: 56px;
  padding-left: 24px;
  padding-right: 63px;
  position: relative;
  align-items: center;
  border: 1px solid #505050;
  box-sizing: border-box;
}
.head-select.transparent{
  background: transparent !important;
}
.custom-select:not(.notOpen).active .head-select svg {
  transition: 0.3s;
  transform: rotate(-180deg);
}
.head-icon svg {
  transition: 0.3s;
}
.head-icon {
  font-size: 24px;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  position: absolute;
}
.item-box {
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 50px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  transition: 0.3s;
  color: #ffffff;
  border-bottom: 1px solid #505050;
}
.item-box:hover {
  opacity: 0.6;
  transition: 0.3s;
}
.item-box:last-child {
  border-bottom: none;
}
.title-select {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
</style>