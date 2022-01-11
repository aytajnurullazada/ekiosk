<template>
  <div class="btn-item standart-width">
    <Btn mode="dark" :onlyIcon="true" @click="isShow = !isShow">
      <template v-slot:icon>
        <ShareSvg />
      </template>
    </Btn>
    <transition name="fade" mode="out-in">
      <div class="social-media-box" v-if="isShow">
        <div class="item-media" @click="redirectLink('fb')">
          <FacebookSvg color="white" />
        </div>
        <div class="item-media" @click="redirectLink('ln')">
          <LinkedinSvg color="white" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Btn from "@/components/common/Buttons/IconBtn";
import ShareSvg from "@/svgComponents/Share";
import FacebookSvg from "@/svgComponents/Facebook";
import LinkedinSvg from "@/svgComponents/Linkedin";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.isShow = false;
      }
    });
  },
  methods: {
    redirectLink(type) {
      let link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
      if(type == 'fb'){
       link.href = `http://www.facebook.com/sharer/sharer.php?u=${window.location.href}&t=newspaper`;
      }
      else if(type == 'ln'){
       link.href = `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`;
      }
      link.target = "_blank";
      let event = new MouseEvent("click", {
        view: window,
        bubbles: false,
        cancelable: true,
      });
      link.dispatchEvent(event);
    },
  },
  components: {
    Btn,
    ShareSvg,
    FacebookSvg,
    LinkedinSvg,
  },
};
</script>

<style  scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: 0.6s;
}
.btn-item {
  margin-right: 12px;
  position: relative;
}

.btn-item.blue,
.btn-item.dark {
  width: 157px;
}
.social-media-box {
  height: 48px;
  display: flex;
  align-items: center;
  background-color: #272727;
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 99;
  border-radius: 6px;
  border: 1px solid #505050;
  margin-top: 24px;
  transform: translateX(-50%);
}
.social-media-box .item-media {
  font-size: 14px;
  height: 100%;
  width: 44px;
  display: flex;
  transition: 0.3s;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-right: 1px solid #505050;
}
.social-media-box .item-media:hover {
  transition: 0.3s;
  opacity: 0.6;
}
.item-media:last-child {
  margin-right: 0;
  border-right: none;
}
.social-media-box:after {
  position: absolute;
  border-width: 10px;
  border-style: solid;
  content: "";
  top: -20px;
  left: 50%;
  transform: translateX(-50%) rotate(-180deg);
  border-color: #272727 transparent transparent transparent;
}
.social-media-box:before {
  position: absolute;
  border-width: 10px;
  border-style: solid;
  content: "";
  top: -21px;
  left: 50%;
  transform: translateX(-50%) rotate(-180deg);
  border-color: #505050 transparent transparent transparent;
}
@media screen and (max-width: 991px) {
  .btn-item.blue,
  .btn-item.dark {
    width: 50%;
    margin-right: 0;
    padding-right: 6px;
    margin-bottom: 24px;
  }
  .btn-item {
    margin-right: 0;
    margin-left: 0;
  }
  .btn-item.dark {
    padding-left: 6px;
    margin-right: 0;
    padding-right: 0;
  }
}
</style>