<template>
  <div class="demo-parent" >
    <div id="demo" style="height: 250px" v-show="isLoad">
      <img
        class="carton"
        v-for="(item, index) in data.slice(0, 6)"
        :key="index"
        :src="item.coverImgPath"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      isLoad: false,
    };
  },
  watch: {
    data(value) {
      jQuery("#demo").carousel3d({
        mode: "3d",
        responsive: true,
        autoPlay: 1,
        navigation: "mouseover",
        positionY: 100,
        rotateX: -10,
      });
    },
  },
  created() {},
  mounted() {
    setTimeout(() => {
      jQuery("#demo").carousel3d({
        mode: "3d",
        responsive: true,
        positionY: 100,
        autoPlay: 1,
        navigation: "mouseover",
        rotateX: -10,
      });
      this.isLoad = true;
    }, 1000);
  },
};
</script>

<style scoped>
.demo-parent {
  width: 100% !important;
  position: relative;
  padding-bottom: 60px;
}
#demo img {
  border-radius: 6px !important;
  max-height: 200px;
  max-width: 360px;
}

#demo {
  margin-top: 0px;
  margin-left: 22px;
  cursor: move !important;
  width: 100% !important;
  overflow: inherit !important;
  transition: 3s;
  
}
#demo {
animation-name: rotate;
transform-style: preserve-3d;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@media screen and (max-width: 992px) {
  #demo {
    margin-left: 0 !important;
  }
  .demo-parent {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 500px) {
  #demo {
    height: 150px !important;
  }
  .demo-parent {
    padding-top: 32px;
    padding-bottom: 0px;
  }
}
.ax-controls,
.ax-nav-common {
  display: none !important;
}
</style>