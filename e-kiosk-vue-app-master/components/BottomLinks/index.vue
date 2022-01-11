<template>
  <section class="news-paper-box" v-scroll-trigger="{ targetId: 'blur-section'}">
    <div class="absolute-left-decor">
      <LeftDecor>
        <div class="title-box">
          <Typography>Faydalı linklər</Typography>
        </div>
      </LeftDecor>
    </div>
    <Container>
      <div class="full-flex-box">
        <div class="title-box left-title-container">
          <Typography>Faydalı linklər</Typography>
        </div>
        <!-- <div class="right-box">
          <span class="right-text">
            <Typography> Hamısına bax</Typography>
          </span>
          <ArrowRight color="#333333" />
        </div> -->
      </div>
      <div class="flex-newpaper-box" id="blur-section">
        <div ref="vueSwipeParent" class="vue-swipe-parent">
          <div
            class="flex-absolute-box"
            ref="slippery"
            v-hammer:panend="onPanEnd"
            v-hammer:pan="(event) => controlPan(event)"
          >
            <div
              class="wrap-absolute"
              ref="wrapAbsolute"
              v-for="(item, index) in propData"
              :key="index"
            >
              <div class="newsPaper-slider">
                  <div class="img-area">
                      <img v-if="item.src" :src="item.src" alt="">
                  </div>
                  <div class="text-box">
                      <div class="title-card" v-if="item.title">
                            <Typography>{{item.title}}</Typography>
                      </div>
                      <div class="desc-card" v-if="item.description">
                            <Typography>{{item.description}}</Typography>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from "@/components/common/Container/";
import Typography from "@/components/common/Typography/";
import NewspaperCard from "@/components/NewspaperCard/";
import LeftDecor from "@/svgComponents/LeftDecor";
import ArrowRight from "@/svgComponents/ArrowRight";
export default {
  components: {
    Container,
    ArrowRight,
    NewspaperCard,
    LeftDecor,
    Typography,
  },
  props: ['propData'],
  data() {
    return {
     
      isPan: null,
      marginLeft: 0,
      marginRight: 0,
      sliderCount: 0,
      scrollPosition: null,
      once: false,
    };
  },
  mounted() {
    if (this.$refs.wrapAbsolute) {
      let parentWidth = this.$refs.vueSwipeParent.clientWidth;
      this.$refs.wrapAbsolute.forEach((item) => {
        item.style.width = parentWidth / 4 + "px"
      });
    }
    if (this.$refs.vueSwipeParent.querySelector(".newsPaper-slider")) {
      let width =
        this.$refs.vueSwipeParent.querySelector(".newsPaper-slider").clientWidth +
        this.marginLeft +
        this.marginRight;
      let allWidth = width * this.propData.length;
      if (this.$refs.slippery) {
        this.$refs.slippery.style.width = allWidth + "px";
      }
    }
  },
  methods: {
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
      let marginLeft = document.body.clientWidth > 991 ? this.marginLeft : 0;
      let marginRight = document.body.clientWidth > 991 ? this.marginRight : 0;
      if (this.sliderCount > 0 && slippery) {
        this.sliderCount--;
        let distance =
          this.$refs.vueSwipeParent.querySelector(".newsPaper-slider").clientWidth +
          marginLeft +
          marginRight;
        slippery.style.left = -distance * this.sliderCount + "px";
      }
    },
    nextSlider() {
      let slippery = this.$refs.slippery;
      let marginLeft = document.body.clientWidth > 991 ? this.marginLeft : 0;
      let marginRight = document.body.clientWidth > 991 ? this.marginRight : 0;
      let sliderCount =
        document.body.getBoundingClientRect().width > 991 ? 3 : 1;
      if (this.sliderCount < this.propData.length - sliderCount && slippery) {
        this.sliderCount++;
        let distance =
          this.$refs.vueSwipeParent.querySelector(".newsPaper-slider").clientWidth +
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
      if (this.isPan == "panleft") {
        this.nextSlider();
      } else {
        this.prevSlider();
      }
    },
  },
};
</script>

<style  scoped>
.wrap-absolute {
  transition: 2s;
  cursor: move !important;
  position: relative;
}
.vue-swipe-parent {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
}
.wrap-absolute:last-child .newsPaper-slider {
  margin-right: 0 !important;
}

.flex-absolute-box {
  transition: 0.3s;
  display: flex;
  left: 0;
  touch-action: pan-y !important;
  justify-content: center;
  position: relative;
}
.newsPaper-slider {
  width: 100%;
  height: 180px;
  background-color: white;
  border-right: 1px solid #e7e5ea;
  display: flex;
  padding-left: 36px;
  align-items: center;
  padding-right: 36px;
   cursor: move !important;

  min-width: auto;
  overflow: hidden;
}
.title-card{
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 4px;
    font-family: "Poppins", sans-serif;
    line-height: 21px;
}
.title-card:last-child{
    text-align: center;
}
.desc-card{
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    color: #7F7F7F;
}
.img-area{
    width: 80px;
    height: 80px;
    min-width: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
    position: relative;
}
.img-area img{
    pointer-events: none;
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: relative;
}
.wrap-absolute{
  min-width: 300px !important;

}
.wrap-absolute:last-child .newsPaper-slider {
  border-right: none !important;
}
@media screen and (max-width: 375px){
    .wrap-absolute{
        max-width: 270px !important;
        min-width: 270px !important;
    }
}

@media screen and (max-width: 991px) {
  .flex-absolute-box {
    transform: scale(1);
  }
  .vue-swipe-parent {
    justify-content: flex-start;
  }
  .wrap-absolute {
    transition: 0s !important;
  }
}

.flex-newpaper-box {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.flex-newpaper-box.active img{
 filter: blur(0px);
  transition: 2s; 
}
.flex-newpaper-box img{
  filter: blur(8px);
  transition: 2s;
}
.news-paper-box {
  background-color: #eaeaea;
  width: 100%;
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
}
.full-flex-box {
  width: 100%;
  display: flex;
  margin-bottom: 100px;
  align-items: center;
  position: relative;
}
.absolute-left-decor {
  position: absolute;
  z-index: 999;
  left: 0%;
  top: 86px;
}
.right-box {
  margin-left: auto;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
}
.right-text {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  color: #333333;
  font-size: 18px;
  line-height: 22px;
  margin-right: 16px;
}
.title-box {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  font-style: normal;
  padding-left: 24px;
  align-items: center;
  color: #333333 !important;
}
.description
.full-screen-absolute {
  width: 100%;
  position: absolute;
  left: 0%;
  height: 100%;
  top: 0%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  pointer-events: none;
  background-size: cover;
}
@media screen and (max-width: 768px) {
    .right-text{
        display: none !important;
    }
  .title-box {
    padding-left: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    position: relative;
    color: #232425;
  }
  .news-paper-box {
    padding-bottom: 40px;
    padding-top: 0px;
    height: auto;
  }
  .right-box {
    font-size: 36px;
  }
  .title-box::after {
    position: absolute;
    height: 1px;
    content: "";
    left: 0;
    width: 40%;
    bottom: -10px;
    background-color: #232425;
  }
}
</style>