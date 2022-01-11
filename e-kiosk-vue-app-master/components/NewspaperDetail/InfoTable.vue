<template>
  <div class="table-parent">
    <div class="title-table">
      <Typography> Məhsul haqqında </Typography>
    </div>
    <div class="info-table">
      <div class="info-flex" v-if="item.value && item.value != ''" v-for="(item, index) in data" :key="index">
        <div class="info-col" >
          <Typography> {{ item.key }} </Typography>
        </div>
        <div class="info-col">
           <Typography v-if="!item.date && item.link"> 
              <span class="pc-link">
                 {{ item.value  }}
              </span>
              <span class="mobile-link">
                <a target="_blank" :href="item.value">
                  Link
                </a>
              </span>
          </Typography>
          <Typography v-if="!item.date && !item.link"> {{ item.value  }}</Typography>
          <Typography v-if="item.date"> {{ checkData(item.value)  }}</Typography>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typography from "@/components/common/Typography/";
export default {
  components: {
    Typography,
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods :{
    checkData(date){
      let newDate = new Date(date);
      let weekDay = this.weeksdays[newDate.getDay()];
      let monthDay = newDate.getUTCDate();
      let years = newDate.getUTCFullYear();
      let month = this.months[newDate.getUTCMonth()];
      return `${weekDay}, ${monthDay} ${month}, ${years}`;
    }
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

<style scoped>
.mobile-link{
  display: none;
}
.info-col {
  height: 50px;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #272727;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
  box-shadow: inset 0px -1px 0px #505050;
  display: flex;
  align-items: center;
}
.info-col:first-child {
  max-width: 344px;
  margin-right: 4px;
}

.info-col:last-child {
  margin-left: 4px;
  border-bottom: none;
}
.info-flex {
  width: 100%;
  display: flex;
  align-items: center;
}
.info-flex:last-child * {
  box-shadow: none;
}
.title-table {
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.info-table {
  padding: 40px;
  width: 100%;
  position: relative;
  background: #1a1a1a;
  border: 1px solid #505050;
  box-sizing: border-box;
}
@media screen and (max-width: 500px) {
  .info-table {
    padding: 0;
    border: none;
  }
  .pc-link{
    display: none;
  }
  .mobile-link{
    display: block;
  }
  .info-col {
    padding-left: 16px;
    padding-right: 16px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
  }
  .info-col{
    white-space: nowrap;
     display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow-x: auto;
  -webkit-box-orient: vertical;
  }
  .info-col:first-child {
    max-width: 110px;
  }
}
</style>