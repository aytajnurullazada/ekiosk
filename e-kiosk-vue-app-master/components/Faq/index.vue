<template>
  <div class="auth-box">
    <div class="left-box">
      <div class="left-content">
        <div class="nav-left-menu">
          <ul>
            <!-- <li>
              <Typography> Jurnallar </Typography>
            </li> -->
            <li>
              <Typography @click="$router.push('/all-newspapers')"> Qəzetlər </Typography>
            </li>
          </ul>
        </div>
        <div class="mail-box" @click="$router.push('/contact')">
          <MailIcon />
        </div>
      </div>
    </div>
    <div class="head-title">
      <Typography tag="p">Çox verilən suallar</Typography>
    </div>
    <div class="flex-auth-box">
      <div class="col-auth">
        <div class="auth-content-box">
            <div class="full-flex">
                <div class="left-box-flex">
                    <ul class="left-tab-li">
                       <li :class="{active: selectedTab == item.id}" @click="selectedTab = item.id" v-for="(item, index) in data" :key="index">
                         <Typography tag="span">{{item.name}}</Typography>
                       </li>
                    </ul>
                </div>  
                <div class="right-box-flex">
                    <transition-group name="fade" mode="out-in">
                      <div class="tab-content-box" v-show="selectedTab == item.id" v-if="selectedTab == item.id" v-for="(item, index) in data" :key="index">
                        <div class="item-flex-box"  v-for="(_item, index) in item.children" :key="index">
                           <Accardion>
                            <template v-slot:title>
                                <div class="title-item">
                                  <Typography tag="span">{{_item.title}}</Typography>
                                </div>
                            </template>
                             <template v-slot:content>
                                <div class="content-item">
                                  <Typography tag="span">{{_item.description}}</Typography>
                                </div>
                            </template>
                        </Accardion>
                        </div>
                    </div>
                      </transition-group>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typography from "@/components/common/Typography/";
import InputHolder from "@/components/common/InputHolder/";
import MailIcon from "@/svgComponents/Mail";
import Accardion from "@/components/common/Accardion/";
export default {
  components: {
    InputHolder,
    Typography,
    Accardion,
    MailIcon,
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      selectedTab: 1,
    };
  },
};
</script>

<style  scoped>
.tab-content-box{
  transition: 0.6s;
}
.content-item {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.item-flex-box:not(:last-child) {
  margin-bottom: 16px;
}
.left-tab-li {
  padding: 0;
  list-style: none;
  margin: 0;
  position: relative;
}
.left-tab-li li.active {
  color: #5387ed;
  font-weight: 500;
  font-size: 18px;
  transition: 0.3s;
}
.left-tab-li li {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  transition: 0.3s;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}
.left-tab-li li:not(:last-child) {
  margin-bottom: 32px;
}
.left-tab-li li span {
  cursor: pointer;
}
.left-box-flex {
  padding-right: 15px;
  width: 100%;
}
.right-box-flex {
  width: 790px;
  min-width: 790px;
  padding-left: 15px;
}
.full-flex {
  width: 100%;
  position: relative;
  display: flex;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: 0.6s;
}
.b-tabs-menu {
  width: 100%;
  display: flex;
  overflow: auto;
  height: 56px;
  margin-bottom: 56px;
}
.tabs-item {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  font-size: 18px;
  line-height: 22px;
  height: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #ffffff;
  position: relative;
  margin-right: 38px;
}
.tabs-item span {
  cursor: pointer;
  position: relative;
}
.tabs-item::after {
  content: "";
  position: absolute;
  bottom: 0px;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0%;
  height: 1px;
  transition: 0.3s;
  background-color: #5387ed;
}
.tabs-item.active::after {
  width: 100%;
  transition: 0.3s;
  opacity: 1;
}
.nav-left-menu {
  height: 100%;
  width: 120px;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: 0.5s;
  bottom: 92px;
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
.left-box {
  position: absolute;
  width: 120px;
  height: 646px;
  top: 0;
  display: flex;
  left: 0;
}
.left-content {
  width: 100%;
  position: relative;
  margin-top: auto;
  height: 100px;
}
.mail-box {
  width: 100%;
  height: 92px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #505050;
  border-left: none;
  transition: 0.3s;
  border-right: none;
  font-size: 32px;
}
.mail-box:hover {
  background-color: #464646;
  transition: 0.3s;
}
.button-box {
  width: 100%;
}
.forgot-password {
  font-family: "Roboto", sans-serif;
  padding-top: 16px;
  margin-bottom: 56px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
}

.auth-content-box {
  width: 100%;
}
.flex-auth-box {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
.flex-auth-box::after {
  position: absolute;
  height: 100%;
  content: "";
  top: 0;
  left: -1px;
  width: 1px;
  background-color: #505050;
}
.col-auth {
  padding-top: 88px;
  padding-bottom: 88px;
  min-height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  position: relative;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
}
.auth-box {
  position: relative;
  width: 100%;
  padding-left: 120px;
  background-color: #1a1a1a;
}
.head-title * {
  margin: 0;
}
.head-title {
  display: flex;
  align-items: center;
  padding-left: 102px;
  padding-right: 102px;
  border-right: none;
  border: 1px solid #505050;
  border-left: none;
  height: 248px;
  position: relative;
  border-right: none;
  font-style: normal;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  font-size: 72px;
  line-height: 72px;
  color: white;
}
.show-mobile {
  display: none;
}
.head-title::after {
  position: absolute;
  top: 0;
  width: 1px;
  left: -1px;
  height: 100%;
  background-color: #505050;
  content: "";
}
.get-register {
  display: none;
}
@media screen and (max-width: 1199px) {
  .col-auth {
    padding: 50px !important;
  }
  .get-register {
    display: block;
    width: 100%;
    padding-top: 32px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 48px;
    text-align: center;
    color: #ffffff;
  }
  .get-register span {
    font-weight: 500;
    border-bottom: 1px solid white;
  }
  .head-title {
    padding-left: 50px;
    padding-right: 50px;
  }
  .head-title {
    font-size: 50px;
  }
  .auth-box {
    padding-left: 0;
  }
}
@media screen and (max-width: 1199px) {
  .left-box {
    display: none;
  }
  .full-flex {
    display: block;
  }
  .left-box-flex {
    width: 100%;
    padding: 0 !important;
  }
  .left-tab-li {
    overflow: auto;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
  }
  .left-tab-li li {
    font-size: 16px;
  }
  .left-tab-li li.active {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }
  .left-tab-li li.active::after {
    position: absolute;
    content: "";
    transition: 0.3s;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: #5387ed;
    width: 100%;
  }
  .left-tab-li li {
    margin-bottom: 0 !important;
    padding-right: 24px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-left: 24px;
  }
  .right-box-flex {
    padding: 0 !important;
    min-width: auto !important;
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .head-title {
    height: 115px;
    font-size: 30px;
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    justify-content: center;
  }
  .col-auth {
    padding: 0 !important;
    padding-top: 40px !important;
    padding-bottom: 72px !important;
    width: 100%;
  }
  .flex-auth-box {
    padding-left: 16px;
    padding-right: 16px;
  }
  .flex-auth-box::after {
    display: none;
  }
  .col-auth::after {
    display: none !important;
  }
  .b-tabs-menu {
    margin-bottom: 40px;
  }
}
</style>