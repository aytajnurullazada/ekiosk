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
          <MailIcon  />
        </div>
      </div>
    </div>
    <div class="head-title">
      <Typography tag="p"> Bütün qəzetlər </Typography>
    </div>
    <div class="flex-auth-box">
      <div class="col-auth">
        <div class="auth-content-box">
          <Filters @filterChange="getFilter($event)" />
          <FlexGrid :data="data" v-if="data.length > 0"/>
          <DataNotFound v-else/>
          <Pagination
            v-if="data.length > 0"
            :key="paginationReload"
            :filter="filters"
             action="all-newspapers/fetchAllNewspaper"
            :pagination="getPagination"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typography from "@/components/common/Typography/";
import InputHolder from "@/components/common/InputHolder/";
import MailIcon from "@/svgComponents/Mail";
import Filters from "./Filters";
import FlexGrid from "./FlexGrid";
import DataNotFound from '@/components/common/DataNotFound/';
import Pagination from "@/components/common/Pagination/";
export default {
  data() {
    return {
      filters: {},
      paginationReload: 0,
    };
  },
  components: {
    InputHolder,
    Typography,
    DataNotFound,
    MailIcon,
    Pagination,
    Filters,
    FlexGrid,
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  computed: {
    getPagination() {
      return this.$store.getters["all-newspapers/getPagination"];
    },
  },
  methods: {
    getFilter(event) {
      this.paginationReload++;
      let filterData = {};
      event.sortModel ? (filterData["sortingId"] = event.sortModel.id) : false;
      event.dayModel ? (filterData["day"] = event.dayModel.value) : false;
      event.yearModel ? (filterData["year"] = event.yearModel.name) : false;
      event.monthModel ? (filterData["month"] = event.monthModel.value) : false;
      this.filters = filterData;
      this.$store.dispatch("all-newspapers/fetchAllNewspaper", {
        push: false,
        data: { ...filterData, pageSize: 20, pageIndex: 1 }
      });
    },
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
  padding-left: 102px;
  padding-top: 88px;
  padding-bottom: 78px;
  padding-right: 102px;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 42px;
  color: #ffffff;
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