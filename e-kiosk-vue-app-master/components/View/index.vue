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
      <div>
        <div class="title-item">
          <Typography tag="p" v-if="getView && getView.name">{{getView.name}}</Typography>
      </div>
      <div class="bottom-desc">
          <Typography tag="p" v-if="getView && getView.numberDate">{{checkData(getView.numberDate, true)}}</Typography>
      </div>
      </div>
    </div>
    <div class="flex-auth-box">
      <div class="col-auth">
        <div class="auth-content-box">
           <div class="pdf-view-box">
              <PdfViewer :data="getView"/>
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
import PdfViewer from './PdfViewer';
export default {
  components: {
    InputHolder,
    Typography,
    PdfViewer,
    MailIcon
  },
  computed: {
    getView(){
      return this.$store.getters['newspaper-detail/getView'];
    }
  },
  methods: {
     checkData(date, noDay) {
      let newDate = new Date(date);
      let weekDay = this.weeksdays[newDate.getDay()];
      let monthDay = newDate.getUTCDate();
      let years = newDate.getUTCFullYear();
      let month = this.months[newDate.getUTCMonth()];
      if (!noDay) {
        return `${weekDay}, ${monthDay} ${month}, ${years}`;
      } else {
        return `${monthDay} ${month}, ${years}`;
      }
    },
  },
  data() {
    return {
       weeksdays: [
         'Bazar',
         'Bazar ertəsi',
         'Çərşənbə axşamı',
         'Çərşənbə',
         'Cümə axşamı',
         'Cümə',
         'Şənbə'
       ],
       months: [
          'yanvar',
         'fevral',
         'mart',
         'aprel',
         'may',
         'iyun',
         'iyul',
         'avqust',
         'sentyabr',
         'oktyabr',
         'noyabr',
         'dekabr'
       ]
    };
  },
};
</script>

<style  scoped>
.pdf-view-box{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
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
  padding-top: 50px;
  padding-bottom: 88px;
  min-height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  position: relative;
  padding-left: 102px;
  padding-right: 222px;
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
  min-height: 248px;
  position: relative;
  border-right: none;
}
.title-item{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  margin-bottom: 8px;
  line-height: 42px;
  color: #FFFFFF;
}
.bottom-desc{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  opacity: 0.6;
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
}
@media screen and (max-width: 767px){
    .title-item{
       font-size: 30px;
    }
    .head-title{
      height: auto !important;
      padding-top: 16px;
      padding-bottom: 16px;
      min-height: auto;
    }
}
@media screen and (max-width: 500px) {
  .head-title {
    height: 115px;
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