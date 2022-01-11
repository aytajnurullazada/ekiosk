<template>
  <section class="news-paper-box">
    <div class="absolute-left-decor">
      <LeftDecor mode="white">
       <div class="title-box ">
          <Typography>{{headTitle}}</Typography>
        </div>
      </LeftDecor>
    </div>
    <Container>
      <div class="full-flex-box">
       <div class="title-box left-title-container">
          <Typography>{{headTitle}}</Typography>
        </div>
        <div class="right-box" @click="$router.push('/all-newspapers')">
          <span class="right-text">
            <Typography> Hamısına bax</Typography>
          </span>
          <ArrowRight color="white" />
        </div>
      </div>
      <div class="flex-newpaper-box">
        <div class="vue-swipe-parent" ref="vueSwipeParent">
          <div
            class="flex-absolute-box"
            ref="slippery"
            v-hammer:panend="onPanEnd"
            v-hammer:pan="(event) => controlPan(event)"
          >
            <div
              class="wrap-absolute"
              ref="wrapAbsolute"
              v-for="(item, index) in data"
              :key="index"
            >
              <div
                class="newsPaper-slider"
              >
                <NewspaperCard opacityDesc="0.6" descriptionColor="white" titleColor="white" :data="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <div
      class="full-screen-absolute"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    ></div>
  </section>
</template>

<script>
import backgroundUrl from "~/assets/images/news-paper-box.png";
import Container from "@/components/common/Container/";
import Typography from "@/components/common/Typography/";
import NewspaperCard from '@/components/NewspaperCard/'
import LeftDecor from "@/svgComponents/LeftDecor";
import ArrowRight from "@/svgComponents/ArrowRight";
export default {
  props: ['data', 'headTitle'],
  components: {
    Container,
    ArrowRight,
    NewspaperCard,
    LeftDecor,
    Typography
  },
  data() {
    return {
      backgroundUrl,
      isPan: null,
      marginLeft: 0,
      marginRight: 24,
      sliderCount: 0,
      scrollPosition: null,
      once: false,
    };
  },
  mounted() {
    if (this.$refs.wrapAbsolute && this.$refs.vueSwipeParent.querySelector(".newsPaper-slider")) {
      let width =
        this.$refs.vueSwipeParent.querySelector(".newsPaper-slider").clientWidth +
        this.marginLeft +
        this.marginRight;
      let allWidth = width * this.data.length;
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
      let marginRight = document.body.clientWidth > 991 ? this.marginRight : 16;
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
      let marginRight = document.body.clientWidth > 991 ? this.marginRight : 16;
      let sliderCount = document.body.getBoundingClientRect().width > 991 ? 3 : 1
      if (this.sliderCount < this.data.length - sliderCount && slippery) {
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
      }
    },
};
</script>

<style  scoped>
.wrap-absolute {
  transition: 2s;
  position: relative;
}
.vue-swipe-parent {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
}
.wrap-absolute:last-child .newsPaper-slider{
    margin-right: 0 !important;
}

.flex-absolute-box {
  transition: 0.3s;
  display: flex;
  touch-action: pan-y !important;

  left: 0;
  position: relative;
}
.newsPaper-slider {
  width: auto;
  cursor: move;
  min-width: auto;
  overflow: hidden;
  margin-right: 24px;
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
  cursor: move;
  display: flex;
  align-items: center;
}
.news-paper-box {
  height: 720px;
  width: 100%;
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
}
.full-flex-box {
  width: 100%;
  display: flex;
  margin-bottom: 63px;
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
  color: white;
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
  color: white !important;
}
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
  .title-box {
    padding-left: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    position: relative;
    color: #232425;
  }
  .right-text{
    display: none;
  }
  .news-paper-box{
      padding-bottom: 40px;
      padding-top: 40px;
      height: auto;
  }
  .right-box {
    font-size: 36px;
  }
  .title-box::after {
    position: absolute;
    height: 1px;
    content: "";
    width: 40%;
    bottom: -10px;
    background-color: #232425;
  }
}
</style>