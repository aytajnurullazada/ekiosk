<template>
  <div class="section-canvas">
    <footer
      :style="{ cursor: `url(${cursor}) 0 50, auto` }"
      class="footer"
      @mousemove="$emit('hover')"
    >
      <div class="right-border-box"></div>
      <div class="full-flex-box content-footer">
        <div class="flex-box first">
          <Typography>
            Sizin <br />
            elektron <br />
            köşkünüz
          </Typography>
        </div>
        <div class="flex-box">
          <div class="email-box">
            <p class="title-email">
              <Typography> Saytımızdakı yeniliklərə abunə olun </Typography>
            </p>
            <div
              :class="{ isError: $v.email.$error }"
              class="input-box"
              @click.self="$refs.emailInput.focus()"
            >
              <input
                required
                v-model="$v.email.$model"
                ref="emailInput"
                type="email"
                :readonly="readOnly"
                class="input-item"
                placeholder="Email ünvanınızı daxil edin"
              />
              <div
                @click="subscripeNow"
                :class="{ isDisabled: $v.$invalid }"
                class="absolute-submit"
              >
                <ArrowRight color="white" />
              </div>
            </div>
          </div>
          <div class="bottom-flex-box" v-if="getSocialLinks">
            <div
              class="bottom-menu"
              v-if="getSocialLinks.socialFB"
              @click="redirectLink(getSocialLinks.socialFB)"
            >
              <FacebookSvg color="white" />
            </div>
            <div
              class="bottom-menu"
              v-if="getSocialLinks.socialInstagram"
              @click="redirectLink(getSocialLinks.socialInstagram)"
            >
              <InstaSvg color="white" />
            </div>
            <div
              class="bottom-menu"
              v-if="getSocialLinks.socialLinkedin"
              @click="redirectLink(getSocialLinks.socialLinkedin)"
            >
              <LinkedinSvg color="white" />
            </div>
            <div
              class="bottom-menu"
              v-if="getSocialLinks.socialYoutube"
              @click="redirectLink(getSocialLinks.socialYoutube)"
            >
              <YoutubeSvg color="white" />
            </div>
            <div @click="scrollZero" class="bottom-menu up">
              <ArrowUp />
            </div>
          </div>
        </div>
        <div class="bottom-box">
          <ul class="bottom-nav-links">
            <nuxt-link
              :to="item.to"
              v-for="(item, index) in navs"
              :key="index"
              tag="li"
            >
              {{ item.name }}
            </nuxt-link>
          </ul>
          <div class="right-logo-box">
            <div>
              <div class="flex-logo-img">
                <img src="@/assets/images/logo.png" alt="" />
              </div>
              <div class="flex-logo-text">
                <Typography>E-Kiosk</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="absolute-layer">
      <DrawLayer />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import cursor from "~/assets/images/pencil.png";
import ArrowRight from "@/svgComponents/ArrowRight";
import InstaSvg from "@/svgComponents/Insta";
import FacebookSvg from "@/svgComponents/Facebook";
import LinkedinSvg from "@/svgComponents/Linkedin";
import YoutubeSvg from "@/svgComponents/Youtube";
import ArrowUp from "@/svgComponents/ArrowUp";
import Typography from "@/components/common/Typography/";
import DrawLayer from "@/components/common/DrawLayer/";
import { event } from "@/event/";
import { required, email } from "vuelidate/lib/validators";
export default {
  props: {
    paralax: {
      type: Boolean,
      default: true,
    },
  },
  validations: {
    email: {
      email,
      required,
    },
  },
  computed: {
    getSocialLinks() {
      return this.$store.getters["common/getSocialLinks"];
    }
  },
  data() {
    return {
      readOnly: false,
      email: null,
      cursor,
      navs: [
        {
          name: "Əsas səhifə",
          to: "/",
        },
        {
          name: "Haqqımızda",
          to: "/about",
        },
        {
          name: "Şirkətlər üçün",
          to: "/for-company",
        },
        {
          name: "Ən çox verilən suallar",
          to: "/faq",
        },
        {
          name: "Əlaqə",
          to: "/contact",
        },
      ],
    };
  },
  mounted() {
    let section = document.querySelector("footer");
    let content = document.querySelector(".content-footer");
    if (this.paralax) {
      section.addEventListener("mousemove", (e) => {
        let x = e.clientX / 100;
        let y = e.clientY / 100;
        gsap.to(content, {
          rotationY: x,
          rotationX: y,
          transformPrespective: 1000,
        });
      });
    }
    let _gaq = _gaq || [];
    _gaq.push(["_setAccount", "UA-36251023-1"]);
    _gaq.push(["_setDomainName", "jqueryscript.net"]);
    _gaq.push(["_trackPageview"]);

    (function () {
      let ga = document.createElement("script");
      ga.type = "text/javascript";
      ga.async = true;
      ga.src =
        ("https:" == document.location.protocol
          ? "https://ssl"
          : "http://www") + ".google-analytics.com/ga.js";
      let s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(ga, s);
    })();
  },
  methods: {
    redirectLink(url) {
      let link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
      link.href = url;
      link.target = "_blank";
      let event = new MouseEvent("click", {
        view: window,
        bubbles: false,
        cancelable: true,
      });
      link.dispatchEvent(event);
    },
    scrollZero() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    subscripeNow() {
      let thisIs = this;
      this.$store
        .dispatch("auth/subcribeSite", { email: this.email })
        .then((res) => {
          event.$emit("openFeedBack", {
            message: "Abunə olundu",
            mode: "success",
          });
          thisIs.readOnly = true;
          thisIs.email = null;
          thisIs.$v.$reset();
        })
        .catch((err) => {
          event.$emit("openFeedBack", {
            message: "Xəta baş verdi, xaiş olunur tekrar cəhd edin.",
            mode: "error",
          });
        });
    },
  },
  components: {
    InstaSvg,
    FacebookSvg,
    LinkedinSvg,
    YoutubeSvg,
    Typography,
    DrawLayer,
    ArrowRight,
    ArrowUp,
  },
};
</script>

<style scoped>
.absolute-submit.isDisabled {
  pointer-events: none;
  opacity: 0.6;
}
.section-canvas {
  position: relative;
}
.absolute-layer {
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none !important;
  bottom: 0;
}
.section-canvas:hover .absolute-layer {
  opacity: 1 !important;
}
.flex-logo-img {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 11px;
}
.flex-logo-text {
  width: 100%;
  display: flex;
  font-style: normal;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  justify-content: center;
  margin-bottom: 11px;
}
.flex-logo-text * {
  font-family: "abhayaLibre" !important;
}
.right-logo-box {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-width: 200px;
  border-left: 1px solid #505050;
}
.input-box.isError {
  border-bottom: 1px solid #ec3137;
}

.bottom-nav-links {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  padding-right: 25px;
}
.bottom-nav-links li {
  margin-right: 48px;
  position: relative;
}
.bottom-nav-links li:last-child {
  margin-right: 0;
}
.bottom-nav-links li {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-decoration: none;
  line-height: 16px;
  padding-bottom: 10px;
  color: #ffffff;
  transition: 0.3s;
  border-bottom: 1px solid transparent;
  opacity: 0.8;
}
.bottom-nav-links li:hover {
  transition: 0.3s;
  border-bottom: 1px solid white;
}
.bottom-nav-links {
  display: flex;
}
.bottom-box {
  margin-top: auto;
  background-color: transparent;
  width: 100%;
  padding-left: 100px;
  display: flex;
  align-items: center;
  position: relative;
  height: 204px;
}
.full-flex-box {
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.bottom-flex-box {
  width: 100%;
  height: 92px;
  position: absolute;
  display: flex;
  left: 0;
  bottom: 0;
}
.input-box {
  border-bottom: 1px solid #505050;
  padding-bottom: 5px;
  padding-right: 48px;
  position: relative;
  width: 100%;
}
.bottom-menu.up {
  font-size: 24px;
  width: 199px;
  min-width: 199px;
}
.bottom-menu {
  width: 100%;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 16px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  border-right: 1px solid #505050;
  border-top: 1px solid #505050;
  position: relative;
}
.bottom-menu:hover {
  background-color: #464646;
  transition: 0.3s;
}
.bottom-menu:last-child {
  border-right: none;
}
.input-box .absolute-submit {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 50%;
  font-size: 24px;
  transform: translateY(-50%);
}
.input-box input {
  width: 100%;
  height: 34px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  border: none;
  background-color: transparent;
  outline: none;
}
.email-box {
  width: 486px;
  max-width: 90%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 96px;
}
.title-email {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  margin-bottom: 42px;
  color: #ffffff;
  font-size: 15px;
  line-height: 18px;
}
footer {
  height: 580px;
  width: 100%;
  position: relative;
  background-color: #272727;
  display: flex;
  align-items: flex-start;
}
.right-border-box {
  width: 120px;
  height: 100%;
  min-width: 120px;
  border-right: 1px solid #505050;
}
.flex-box {
  width: 50%;
  height: 376px;
  position: relative;
  border-bottom: 1px solid #505050;
}
.flex-box.first {
  border-right: 1px solid #505050;
  padding-bottom: 90px;
  padding-top: 90px;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 56px;
  line-height: 66px;
  color: #ffffff;
  padding-left: 100px;
}
@media screen and (max-width: 1199px) {
  .flex-box.first {
    display: none;
  }
  .flex-box {
    width: 100%;
  }
  .bottom-box {
    padding-left: 50px;
  }
}
@media screen and (max-width: 991px) {
  .bottom-menu.up,
  .right-border-box {
    display: none;
  }
  .right-logo-box {
    min-width: inherit !important;
  }
}
@media screen and (max-width: 767px) {
  .bottom-menu.up,
  .right-border-box {
    display: none;
  }
  .email-box {
    width: 232px;
    top: 56px;
  }
  .right-logo-box {
    width: 116px;
  }
  .flex-box {
    height: 382px;
  }
  .input-box {
    padding-bottom: 10px;
  }
  .absolute-submit {
    top: 0;
  }
  .bottom-nav-links {
    display: block;
  }
  .bottom-box {
    position: relative;
    height: auto;
  }
  .right-logo-box {
    width: 116px;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .bottom-nav-links {
    width: 55%;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .bottom-menu {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height, or 117% */

    text-align: center;

    /* main / white */

    color: #ffffff;
  }
  .bottom-box {
    padding-left: 44px;
  }
  .bottom-flex-box {
    height: 62px;
  }
  footer {
    height: auto;
  }
  .bottom-nav-links li {
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .bottom-nav-links li:last-child {
    margin-bottom: 0;
  }
}
</style>