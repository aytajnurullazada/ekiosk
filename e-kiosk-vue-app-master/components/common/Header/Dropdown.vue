<template>
  <li class="dropdown-li" @click="toggleMenu">
    <a class="hide-desktop" @click="$store.commit('common/menuIsShow')">
      <User />
    </a>
    <div class="head-dropdown" :class="{ active: isOpen }">
      <User />
      <div class="username" v-if="getUser">
        <Typography>{{ getUser.name }}</Typography>
      </div>
      <div class="right-item">
        <DropdownArrow />
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="dropdown-absolute" v-if="isOpen">
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
      </div>
    </transition>
  </li>
</template>

<script>
import Typography from "@/components/common/Typography/";
import Fav from "@/svgComponents/Fav.vue";
import Docs from "@/svgComponents/Docs.vue";
import NotficationCount from "@/svgComponents/NotficationCount";
import User from "@/svgComponents/User";
import LogOut from "@/svgComponents/LogOut";
import DropdownArrow from "@/svgComponents/DropdownArrow";
import {event} from '@/event/'
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    NotficationCount,
    Docs,
    DropdownArrow,
    Typography,
    LogOut,
    Fav,
    User,
  },
  computed: {
    getNewNotfications() {
      return this.$store.getters["auth/getNewNotfications"];
    },
    getUser() {
      return this.$store.getters["auth/getUser"];
    },
  },
  methods: {
    toggleMenu(){
      this.isOpen = !this.isOpen;
      event.$emit('closeMenu');
    },
    logOut() {
      this.$store.commit("auth/resetUser");
    },
  },
  mounted() {
    
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    });
  },
};
</script>

<style  scoped>
.head-dropdown.active .right-item svg {
  transform: rotate(-180deg);
  transition: 0.3s;
}
.hide-desktop {
  display: none;
}
.head-dropdown .right-item svg {
  transition: 0.3s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: 0.6s;
}
.head-dropdown {
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  min-width: 176px;
  align-items: center;
}
.head-dropdown .right-item {
  font-size: 20px;
  position: relative;
}
.head-dropdown .username {
  padding-left: 17px;
  padding-right: 17px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.dropdown-absolute {
  width: 100%;
  position: absolute;
  left: 0;
  padding: 8px;
  background-color: #1a1a1a;
  z-index: 9999;
  top: 100%;
  left: 0;
}
.item-dropdown {
  height: 56px;
  display: flex;
  position: relative;
  padding-left: 28px;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
  padding-right: 28px;
}
.item-dropdown .text-item {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}
.item-dropdown:hover {
  transition: 0.3s;
  background-color: #5387ed;
}

.item-dropdown svg,
.item-dropdown .flex-notifation {
  margin-right: 16px;
}
@media screen and (max-width: 500px) {
  .head-dropdown {
    width: auto !important;
    min-width: auto;
    display: none;
  }
  .dropdown-absolute {
    display: none !important;
  }
  .hide-desktop {
    display: flex;
  }
  .absolute-box {
    display: none !important;
  }
}
</style>

<style>
.item-dropdown:hover .absolute-box {
  transition: 0.3s;
  background-color: #5387ed !important;
}
</style>