<template>
  <header :style="customStyle" :class="{ activeHeader: isOpenMenu }">
    <transition name="fade" mode="out-in">
      <div class="mobile-menu hide-desktop" v-if="getIsShow">
        <div class="vertical-right-text" v-if="getUser">
          <Typography>{{ getUser.name }}</Typography>
        </div>
        <div class="right-mobile-menu">
          <ul>
            <nuxt-link tag="li" to="/profile?id=3" class="flex-li">
              <nuxt-link to="/profile?id=0" class="item-dropdown" tag="div">
                <Fav />
                <div class="text-item">
                  <Typography>Bəyəndiklərim</Typography>
                </div>
              </nuxt-link>
              <nuxt-link to="/profile?id=1" class="item-dropdown" tag="div">
                <Docs />
                <div class="text-item">
                  <Typography>Tarixçə</Typography>
                </div>
              </nuxt-link>
              <nuxt-link to="/profile?id=2" class="item-dropdown" tag="div">
                <NotficationCount
                  circleColor="#272727"
                  :count="getNewNotfications < 100 ? getNewNotfications : '99+'"
                />
                <div class="text-item">
                  <Typography>Bildirişlər</Typography>
                </div>
              </nuxt-link>
              <div class="item-dropdown" @click="logOut">
                <LogOut />
                <div class="text-item">
                  <Typography>Çıxış</Typography>
                </div>
              </div>
            </nuxt-link>
          </ul>
        </div>
        <div class="bottom-flex-absolute" v-if="getSocialLinks">
          <div
            class="col-flex"
            v-if="getSocialLinks.socialFB"
            @click="redirectLink(getSocialLinks.socialFB)"
          >
            <FbSvg />
          </div>
          <div
            class="col-flex"
            v-if="getSocialLinks.socialInstagram"
            @click="redirectLink(getSocialLinks.socialInstagram)"
          >
            <InstaSvg />
          </div>
          <div class="col-flex">
            <LinkedinSvg
              v-if="getSocialLinks.socialLinkedin"
              @click="redirectLink(getSocialLinks.socialLinkedin)"
            />
          </div>
          <div
            class="col-flex"
            v-if="getSocialLinks.socialYoutube"
            @click="redirectLink(getSocialLinks.socialYoutube)"
          >
            <YTSvg />
          </div>
        </div>
      </div>
    </transition>
    <nuxt-link tag="div" class="logo-box" to="/">
      <div class="logo-item">
        <img src="@/assets/images/logo.png" alt="" />
      </div>
      <span class="logo-text">
        <Typography>E-Kiosk</Typography>
      </span>
    </nuxt-link>
    <nav class="right-nav">
      <ul>
        <li
          class="menu-nav"
          @click="(isOpenMenu = !isOpenMenu), $store.commit('common/closeMenu')"
        >
          <a href="#">
            <Typography>{{
              !isOpenMenu ? "Menu" : "Menyunu bağla"
            }}</Typography>
          </a>
        </li>
        <nuxt-link tag="li" to="/auth" v-if="!isAuth">
          <User />
        </nuxt-link>
        <DropDownMenu v-else />
        <nuxt-link class="icon-li" to="/basket" tag="li" v-if="isAuth">
          <a @click="$router.push('/basket')">
            <Basket />
            <Typography className="count-basket">{{
              lengthCheck(getBasketList.length)
            }}</Typography>
          </a>
        </nuxt-link>
      </ul>
    </nav>
    <transition name="fade" mode="out-in">
      <div class="menu-box" v-if="isOpenMenu && !getIsShow">
        <div class="left-bar">
          <div class="box-bottom" v-if="getSocialLinks">
            <div
              class="nav-item-box"
              v-if="getSocialLinks.socialYoutube"
              @click="redirectLink(getSocialLinks.socialYoutube)"
            >
              <YTSvg />
            </div>
            <div
              class="nav-item-box"
              v-if="getSocialLinks.socialLinkedin"
              @click="redirectLink(getSocialLinks.socialLinkedin)"
            >
              <LinkedinSvg />
            </div>
            <div
              class="nav-item-box"
              v-if="getSocialLinks.socialInstagram"
              @click="redirectLink(getSocialLinks.socialInstagram)"
            >
              <InstaSvg />
            </div>
            <div
              class="nav-item-box"
              v-if="getSocialLinks.socialFB"
              @click="redirectLink(getSocialLinks.socialFB)"
            >
              <FbSvg />
            </div>
            <div class="nav-item-box" @click="$router.push('/contact')">
              <MailIcon />
            </div>
          </div>
        </div>
        <div class="right-menu">
          <!-- <div class="show-flex-mobile-menu">
            <CloseSvg @click="isOpenMenu = !isOpenMenu" />
          </div> -->
          <div class="col-right">
            <div class="title hide-pc">
              <Typography tag="span">Haqqımızda</Typography>
            </div>
            <div class="inner-menu">
              <div class="title">
                <Typography tag="span">Haqqımızda</Typography>
              </div>
              <div class="link-item">
                <Typography tag="span">Elektron köşk nədir?</Typography>
              </div>
              <div class="link-item">
                <Typography tag="span">Abunə olmağın üstünlükləri</Typography>
              </div>
              <div class="link-item no-margin">
                <Typography tag="span">Kampaniyalar</Typography>
              </div>
            </div>
          </div>
          <div class="col-right">
            <div class="title hide-pc">
              <Typography tag="span">Şirkətlər üçün</Typography>
            </div>
            <div class="inner-menu">
              <div class="title">
                <Typography tag="span">Şirkətlər üçün</Typography>
              </div>
              <div class="link-item">
                <Typography tag="span">Korporativ əməkdaşlıq</Typography>
              </div>
              <div class="link-item">
                <Typography tag="span"
                  >Şirkətlər üçün abunə şərtləri</Typography
                >
              </div>
              <div class="link-item no-margin">
                <Typography tag="span">Niyə bizimlə əməkdaşlıq?</Typography>
              </div>
            </div>
          </div>
          <div class="col-right">
            <div class="title hide-pc">
              <Typography tag="span">Digər</Typography>
            </div>
            <div class="inner-menu">
              <div class="title">
                <Typography tag="span">Digər</Typography>
              </div>
              <div class="link-item" @click="$router.push('/faq')">
                <Typography tag="span">Çox verilən suallar</Typography>
              </div>
              <div class="link-item">
                <Typography tag="span">Şikayət və təkliflər</Typography>
              </div>
              <div
                @click="$router.push('/contact')"
                class="link-item no-margin"
              >
                <Typography tag="span">Əlaqə</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import Typography from "@/components/common/Typography/";
import Fav from "../../../svgComponents/Fav.vue";
import Docs from "@/svgComponents/Docs.vue";
import NotficationCount from "@/svgComponents/NotficationCount";
import LogOut from "@/svgComponents/LogOut";
import User from "@/svgComponents/User";
import MailIcon from "@/svgComponents/Mail";
import CloseSvg from "@/svgComponents/Close";
import Basket from "@/svgComponents/Basket";
import YTSvg from "@/svgComponents/Youtube";
import LinkedinSvg from "@/svgComponents/Linkedin";
import InstaSvg from "@/svgComponents/Insta";
import FbSvg from "@/svgComponents/Facebook";
import DropDownMenu from "./Dropdown.vue";
import {event} from '@/event/';
export default {
  props: ["customStyle"],
  data() {
    return {
      isOpenMenu: false,
    };
  },
  watch: {
    isOpenMenu(value) {
      if (value) document.body.classList.add("closeScroll");
      else document.body.classList.remove("closeScroll");
    },
    $router() {
      this.isOpenMenu = false;
    },
  },
  mounted(){
    let thisIs = this;
    event.$on('closeMenu', function(){
      thisIs.isOpenMenu = false;
    })
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
    logOut() {
      this.$store.commit("auth/resetUser");
    },
    lengthCheck(payload) {
      if (payload < 100) {
        return payload;
      } else {
        return "99+";
      }
    },
  },
  computed: {
    getSocialLinks() {
      return this.$store.getters["common/getSocialLinks"];
    },
    getIsShow() {
      return this.$store.getters["common/getIsShow"];
    },
    getNewNotfications() {
      return this.$store.getters["auth/getNewNotfications"];
    },
    getUser() {
      return this.$store.getters["auth/getUser"];
    },
    getBasketList() {
      return this.$store.getters["auth/getBasketList"];
    },
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
  },
  components: {
    YTSvg,
    LinkedinSvg,
    InstaSvg,
    FbSvg,
    Typography,
    User,
    MailIcon,
    Docs,
    CloseSvg,
    Basket,
    LogOut,
    NotficationCount,
    Fav,
    DropDownMenu,
  },
};
</script>

<style scoped>
.title.hide-pc {
  display: none !important;
}
.mobile-menu {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: 0.6s;
}
.col-right .hide-pc {
  display: flex;
}
header {
  transition: 0.6s;
}
.activeHeader {
  transition: 0.6s;
  background-color: #272727 !important;
}
.link-item {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 32px;
  font-size: 18px;
  cursor: pointer;
  line-height: 22px;
  color: #ffffff;
}
.link-item.no-margin {
  margin: 0;
}
.title {
  margin-bottom: 32px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #848484;
}
.right-menu {
  width: 100%;
  display: flex;
  position: relative;
  height: 360px;
}
.col-right {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #505050;
  border-top: none;
}
.col-right:not(:last-child) {
  border-right: none;
}

.nav-item-box {
  width: 100%;
  height: 20%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #505050;
  border-left: none;
  transition: 0.3s;
  border-right: none;
  font-size: 18px;
}
.nav-item-box:hover {
  background-color: #464646;
  transition: 0.3s;
}
.nav-left-menu {
  height: 100%;
  width: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: 0.5s;
  z-index: 9999;
}
.nav-left-menu ul {
  padding: 0;
  margin: 0;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  justify-content: center;
  display: flex;
  vertical-align: baseline;
}
.nav-left-menu ul li {
  list-style: none;
  margin-top: 56px;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  font-style: normal;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.nav-left-menu ul li:hover::before {
  height: 100%;
  transition: 0.3s;
}
.nav-left-menu ul li:before {
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  vertical-align: baseline;
  left: -5px;
  transition: 0.3s;
  opacity: 0.6;
  height: 0%;
  width: 1px;
  bottom: 0;
  content: "";
  position: absolute;
  background-color: white;
}
.box-bottom {
  width: 100%;
  height: 100%;
  margin-top: auto;
}
.left-bar {
  display: flex;
  position: relative;
  width: 120px;
  height: 100%;
  border-right: 1px solid #505050;
}
.block-menu {
  width: 100%;
  height: 100%;
  border-right: none;
}
.menu-box {
  position: absolute;
  top: 92px;
  height: 644px;
  display: flex;
  background-color: #272727;
  width: 100%;
  left: 0;
  z-index: 9999;
}
.count-basket {
  color: white;
  margin-top: -20px;
  font-size: 12px !important;
  line-height: 14px;
  font-weight: 500;
  margin-left: 5px;
  font-family: "Roboto", sans-serif;
}
.icon-li {
  font-size: 24px;
  padding: 0 !important;
  cursor: pointer;
}
.icon-li a {
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  height: 100%;
}

.menu-nav {
  padding-left: 72px;
  padding-right: 72px;
}

.right-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
  padding: 0;
  margin: 0;
}
.right-nav li:hover {
  background-color: #464646;
  transition: 0.3s;
}
.right-nav li {
  padding-left: 32px;
  padding-right: 32px;
  height: 100%;
  transition: 0.3s;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.right-nav li:after {
  content: "";
  height: 100%;
  width: 1px;
  position: absolute;
  left: 0;
  z-index: 99;
  opacity: 0.3;
  background-color: white;
}
.right-nav li:last-child {
  border-right: none;
}
.right-nav a {
  color: white;
  font-weight: 400;
  font-size: 18px;
  text-decoration: none !important;
  line-height: 21px;
  outline: none;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.right-nav {
  margin-left: auto;
  display: block;
  height: 100%;
}
header {
  width: 100%;
  top: 0;
  z-index: 9999;
  left: 0;
  position: absolute;
  height: 92px;
  display: flex;
  align-items: center;
  background-color: transparent;
}
header::after {
  content: "";
  height: 1px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 99;
  opacity: 0.3;
  background-color: white;
}
.logo-box {
  width: 222px;
  height: 100%;
  cursor: pointer;
  background-color: #505050;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-item {
  transform: 0.3s;
  margin-right: 12px;
}
.logo-text {
  font-style: normal;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}
.logo-text * {
  font-family: "abhayaLibre" !important;
}
.show-flex-mobile-menu {
  display: none;
}
@media screen and (max-width: 768px) {
  .logo-item {
    display: none !important;
  }
  .col-right {
    padding-left: 16px;
    padding-right: 16px;
  }
  .link-item {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 16px;
  }
  .logo-text {
    font-size: 18px;
    white-space: nowrap;
  }
  .right-nav li {
    padding-left: 22px;
    padding-right: 22px;
  }
  .right-nav li:first-child::after {
    display: none;
  }

  .logo-box {
    padding-left: 11px;
    padding-right: 11px;
    width: auto;
  }
  .menu-nav a {
    font-size: 14px;
  }
}
@media screen and (max-width: 767px) {
  .left-bar {
    display: none;
  }
  .menu-box {
    height: 476px;
  }
}
@media screen and (max-width: 500px) {
  .title.hide-pc {
    display: block !important;
  }
  .bottom-flex-absolute {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    align-items: center;
    border-top: 1px solid #505050;
    display: flex;
    height: 83px;
  }
  .inner-menu .title {
    display: none;
  }
  .col-right {
    align-items: flex-start;
  }
  .link-item {
    margin-bottom: 16px !important;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    opacity: 0.8;
  }
  .title.hide-pc {
    writing-mode: vertical-rl;
    color: #848484;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    margin: 0 !important;
    margin-right: 24px !important;
    transform: rotate(-180deg);
    vertical-align: baseline;
  }
  .bottom-flex-absolute .col-flex {
    border-right: 1px solid #505050;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 20px;
    height: 100%;
    font-size: 20px;
  }
  .right-mobile-menu ul {
    margin: 0;
    padding: 0;
  }
  .item-dropdown {
    display: flex;
    opacity: 0.8;
    align-items: center;
    margin-bottom: 30px;
  }
  .text-item {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    padding-left: 14px;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
  .mobile-menu {
    position: absolute;
    width: 100%;
    height: 85vh;
    left: 0;
    top: 100%;
    background-color: #272727;
    display: flex;
    padding-top: 40px;
    z-index: 9999;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 40px;
  }
  .vertical-right-text {
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    margin-right: 24px;
    color: #848484;
    vertical-align: baseline;
  }
  .right-menu {
    flex-wrap: wrap;
  }
  .col-right {
    width: 100%;
    height: auto;
    padding: 32px !important;
    border: none !important;
    border-bottom: 1px solid #505050 !important;
    justify-content: flex-start;
  }

  .show-flex-mobile-menu {
    padding-left: 32px;
    padding-right: 32px;
    font-size: 24px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 0;
  }
  .menu-box {
    padding-top: 0;
    height: 100vh;
    left: 0;
    width: 100%;
    position: fixed;
    overflow-y: auto;
  }
  .menu-box .col-right {
    padding-top: 40px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 40px;
  }
  .menu-box .col-right:last-child {
    border-bottom: none !important;
  }
}
</style>