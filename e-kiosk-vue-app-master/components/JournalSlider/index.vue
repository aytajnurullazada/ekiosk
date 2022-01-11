<template>
  <section ref="journalBox" v-scroll-trigger="{ targetId: 'menu-item-1' }">
    <div class="vue-swipe-parent" id="menu-item-1">
      <div
        class="flex-absolute-box"
        ref="slippery"
        v-hammer:panend="onPanEnd"
        v-hammer:pan="(event) => controlPan(event)"
      >
        <div
          class="wrap-absolute"
          ref="wrapAbsolute"
          @mouseenter="addWidth, hoverThis($event)"
            @mouseleave="resetWidth, leaveThis($event)"
          v-for="(item, index) in data"
          :key="index"
        >
          <div
            
            class="item-slider"
          >
            <img :src="item.src" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      isPan: null,
      marginLeft: 10,
      marginRight: 10,
      sliderCount: 0,
      itemLength: 0,
      scrollPosition: null,
      once: false,
    };
  },
  props: ["data"],
  mounted() {
    if (document.querySelector(".item-slider")) {
      let width =
        document.querySelector(".item-slider").clientWidth +
        this.marginLeft +
        this.marginRight;
      let allWidth = width * this.data.length;
      if (this.$refs.slippery) {
        this.$refs.slippery.style.width = allWidth + "px";
      }
    }
  },

  methods: {
    hoverThis(event) {
     
      if (document.body.clientWidth > 991) {
        gsap.to(event.target, {
          width: 464,
          minWidth: 464,
        });
        event.target.classList.add("active");
         if(this.$refs.slippery){
        this.$refs.slippery.classList.add('active-flex-box');
      }
      } else {
      }
    },
    leaveThis(event) {
      
      if (document.body.clientWidth > 991) {
        gsap.to(event.target, {
          width: 98,
          minWidth: 98,
        });
        event.target.classList.remove("active");
         if(this.$refs.slippery){
        this.$refs.slippery.classList.remove('active-flex-box');
      }
      } else {
      }
    },
    addWidth() {
      setTimeout(() => {
        let width = (this.$refs.slippery.clientWidth += 40);
        this.$refs.slippery.style.width = width + "px";
      }, 500);
    },
    resetWidth() {
      setTimeout(() => {
        let width = (this.$refs.slippery.clientWidth -= 40);
        this.$refs.slippery.style.width = width;
      }, 0);
    },
    prevSlider() {
      let slippery = this.$refs.slippery;
      let marginLeft = document.body.clientWidth > 991 ? this.marginLeft : 2;
      let marginRight = document.body.clientWidth > 991 ? this.marginRight : 2;
      if (this.sliderCount > 0 && slippery) {
        this.sliderCount--;
        let distance =
          document.querySelector(".item-slider").clientWidth +
          marginLeft +
          marginRight;
        slippery.style.left = -distance * this.sliderCount + "px";
      }
    },
    nextSlider() {
      let slippery = this.$refs.slippery;
      let marginLeft = document.body.clientWidth > 991 ? this.marginLeft : 2;
      let marginRight = document.body.clientWidth > 991 ? this.marginRight : 2;
      if (this.sliderCount < this.data.length - 3 && slippery) {
        this.sliderCount++;
        let distance =
          document.querySelector(".item-slider").clientWidth +
          marginLeft +
          marginRight;
        slippery.style.left = -distance * this.sliderCount + "px";
      }
    },
    controlPan(event) {
      if (event.additionalEvent == "panleft") {
        this.isPan = "panleft";
      } else {
        this.isPan = "panright";
      }
    },
    onPanEnd() {
      if (document.body.clientWidth < 992) {
        if (this.isPan == "panleft") {
          this.nextSlider();
          this.nextSlider();
          this.$refs.wrapAbsolute.forEach((item) => {
            item.classList.remove("active");
          });
          this.$refs.wrapAbsolute[this.sliderCount + 1].classList.add("active");
        } else {
          this.prevSlider();
          this.prevSlider();
          this.$refs.wrapAbsolute.forEach((item) => {
            item.classList.remove("active");
          });
          this.$refs.wrapAbsolute[this.sliderCount + 1].classList.add("active");
        }
      }
    },
  },
};
</script>

<style  scoped>
.active-flex-box{
  margin-left: -200px;
  transition: 0.3s;
}
.active-flex-box .wrap-absolute img{
   width: 100%;
   height: 100%;
   transition: 0.3s;
   object-fit: cover;
}
.wrap-absolute {
  width: 96px;
  min-width: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 12px;
  margin-right: 12px;
  transform: scale(0.5s);
  padding-top: 16px;
  height: 462px;
  opacity: 0;
  margin-top: 40px;
}
.vue-swipe-parent {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  height: 523px;
}
.vue-swipe-parent.active .wrap-absolute {
  opacity: 1;
}
.flex-absolute-box {
  height: 100%;
  left: 50%;
  transition: 0.3s;
  transform: translateX(-50%);
  display: flex;
  position: absolute;
  touch-action: pan-y !important;
}

.item-slider {
  width: 100%;
  cursor: pointer;
  min-width: 100%;
  position: absolute;
  left: 50%;
  height: 100%;
  overflow: hidden;
  transform: translateX(-50%);
}
.item-slider img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
.wrap-absolute:nth-child(2) .item-slider {
  top: 24px;
}
.wrap-absolute:nth-child(3) .item-slider {
  top: 54px;
}
.wrap-absolute:nth-child(4) .item-slider {
  top: 24px;
}
.wrap-absolute:nth-child(6) .item-slider {
  top: 54px;
}
.wrap-absolute:nth-child(7) .item-slider {
  top: 24px;
}
.wrap-absolute:nth-child(9) .item-slider {
  top: 54px;
}
@media screen and (min-width: 1300px) {
  .vue-swipe-parent{
    transform: scale(0.95);
  }
}
@media screen and (max-width: 1300px) {
   .vue-swipe-parent{
    transform: scale(0.7);
  }
}
@media screen and (max-width: 768px) {
  .wrap-absolute {
    height: 304px;
  }
  .item-slider img {
    height: 100%;
  }
  .flex-absolute-box,
  .vue-swipe-parent {
    height: 328px;
  }
}
@media screen and (max-width: 991px) {
  .vue-swipe-parent {
    transform: scale(1);
    justify-content: flex-start;
  }
  .flex-absolute-box{
    left: auto;
    transform: inherit;
  }
  .item-slider {
    width: 72px;
    min-width: 72px;
  }
  .wrap-absolute {
    width: 72px;
    min-width: 72px;
    margin-left: 2px !important;
    margin-right: 2px !important;
  }
  .wrap-absolute.active {
    width: 138px;
    min-width: 138px;
  }
  .wrap-absolute.active .item-slider {
    width: 138px;
    min-width: 138px;
    transition: 0.3s;
  }
}
</style>