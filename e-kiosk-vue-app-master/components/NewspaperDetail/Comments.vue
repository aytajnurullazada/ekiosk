<template>
  <div>
    <RatingsModal @closed="isOpenRate = false" :isShow="isOpenRate" :data="getRatings"/>
    <CommentModal @closed="isOpenComment = false" :isShow="isOpenComment"/>
    <div class="title-comments">
      <Typography> Qiymətləndirmələr  </Typography>
    </div>
    <div class="flex-rate">
      <div class="left-flex">
        <div class="full-flex" @click="isOpenRate = true">
          <div class="rate-text">
            <Typography> {{allRate}} </Typography>
          </div>
          <div class="stars-flex">
            <StarSvg
              :color="index + 1 > allRate ? 'white' : '#F69F29'"
              v-for="(item, index) in 5"
              :key="index"
            />
          </div>
          <div class="dropdown-icon">
            <DropdownArrow />
          </div>
        </div>
        <div class="bottom-text" v-if="getRatings">
          <!-- <Typography tag="p"> {{getRatings.allRate}} qiymətləndirmə və {{data.length}} rəy </Typography> -->
          <Typography tag="p"> {{getRatings.allRate}} qiymətləndirmə </Typography>
        </div>
      </div>
      <div class="right-button">
        <Btn mode="blue" @click="isOpenComment = true">
          <template v-slot:icon>
            <StarSvg color="white" />
          </template>
          Qiymətləndir
        </Btn>
      </div>
    </div>
    <div class="comments-box">
      <div class="comment" v-for="(item, index) in data" :key="index">
        <div class="profile-picture" v-if="item.expertName">
          <Typography> {{ item.expertName.slice(0, 1) }} </Typography>
        </div>
        <div class="right-comment" v-if="item.expertName">
          <div class="flex-profile-box">
            <div class="profile-picture mobile">
              <Typography> {{ item.expertName.slice(0, 1) }} </Typography>
            </div>
            <div class="flex-comment-title">
              <div class="flex-title">
                <Typography> {{item.expertName}} </Typography>
              </div>
              <div class="date-title" v-if="item.createdate">
                <Typography> {{checkData(item.createdate, true)}} </Typography>
              </div>
              <div class="stars-flex comment-stars" v-if="item.criterionPoint">
                <StarSvg
                   color="#F69F29"
                   v-for="(item, rate_index) in item.criterionPoint"
                   :key="rate_index"
                />
                <StarSvg
                   color="white"
                   v-for="(item, rate_index) in 5 - item.criterionPoint"
                   :key="rate_index + Math.random()"
                />
              </div>
            </div>
          </div>
          <div class="comment-description" v-if="false">
            <Typography>
                {{item.comment}}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownArrow from "@/svgComponents/DropdownArrow";
import RatingsModal from '@/components/RatingsModal/';
import CommentModal from '@/components/CommentModal/';
import StarSvg from "@/svgComponents/Star";
import CommentSvg from "@/svgComponents/Comment";
import Btn from "@/components/common/Buttons/IconBtn";
import Typography from "@/components/common/Typography/";
export default {
  data() {
    return {
        isOpenRate: false,
        isOpenComment: false,
        allRate: 0,
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
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  components:{
    RatingsModal,
    CommentModal  
  },
  watch: {
    getRatings(value) {
      if (value && value.allRateNumbers) {
        this.allRate = this.$calcRaitings(value.allRateNumbers);
      }
    },
  },
  computed: {
    getRatings() {
      return this.$store.getters["newspaper-detail/getRatings"];
    }
  },
  methods: {
     checkData(date, noDay){
      let newDate = new Date(date);
      let weekDay = this.weeksdays[newDate.getDay()];
      let monthDay = newDate.getUTCDate();
      let years = newDate.getUTCFullYear();
      let month = this.months[newDate.getUTCMonth()];
      if(!noDay){
        return `${weekDay}, ${monthDay} ${month}, ${years}`;
      }
      else{
        return `${monthDay} ${month}, ${years}`;
      }
    }
  },
  components: {
    Typography,
    DropdownArrow,
    CommentSvg,
    Btn,
    StarSvg,
  },
};
</script>

<style scoped>
.flex-profile-box {
  display: flex;
}
.flex-comment-title {
  display: flex;
  /* margin-bottom: 13px; */
  margin-bottom: 0px;
  position: relative;
}
.comment-description {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.dropdown-icon {
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-left: 16px;
}
.date-title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  margin-right: 8px;
  font-weight: normal;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  color: #858585;
}
.comment-stars {
  align-items: center;
  font-size: 12px !important;
}

.flex-title {
  font-family: "Roboto", sans-serif;
  position: relative;
  font-style: normal;
  display: flex;
  align-items: center;
  padding-right: 12px;
  margin-right: 12px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.flex-title::after {
  width: 1px;
  height: 20px;
  background-color: #a3a3a3;
  position: absolute;
  right: 0;
  top: 50%;
  content: "";
  transform: translateY(-50%);
}
.right-comment {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}
.comment {
  padding-bottom: 24px;
  padding-top: 24px;
  border-bottom: 1px solid #505050;
  display: flex;
  position: relative;
}
.profile-picture {
  width: 48px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #ffffff;
  height: 48px;
  border-radius: 50%;
  background-color: #e5e3e8;
  min-width: 48px;
  display: flex;
  margin-right: 12px;
  align-items: center !important;
  justify-content: center;
  overflow: hidden;
}
.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.full-flex {
  display: flex;
  cursor: pointer;
  margin-bottom: 20px;
}
.bottom-text {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.bottom-text p {
  margin: 0;
}
.right-button {
  margin-left: auto;
  width: 287px;
}
.rate-text {
  margin-right: 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #ffffff;
}
.flex-rate {
  display: flex;
  margin-bottom: 40px;
  position: relative;
}
.stars-flex {
  display: flex;
  font-size: 20px;
  align-items: center;
}
.profile-picture.mobile {
  display: none;
}
.stars-flex svg {
  margin-right: 8px;
}
.stars-flex svg:last-child {
  margin-right: 0;
}
.title-comments {
  margin-bottom: 32px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  margin-top: 64px;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 767px) {
  .flex-rate {
    flex-wrap: wrap;
  }
  .right-button,
  .left-flex {
    width: 100%;
  }
  .right-button {
    max-width: 100%;
  }
  .title-comments {
    font-family: "Poppins", sans-serif;
    margin-top: 60px;
    margin-bottom: 41px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .title-comments span {
    border-bottom: 1px solid white;
  }
  .flex-rate {
    margin-bottom: 32px;
  }
  .left-flex {
    margin-bottom: 24px;
  }
  .flex-comment-title {
    flex-wrap: wrap;
  }
  .flex-title {
    width: 100%;
    margin-bottom: 10px;
  }
  .profile-picture {
    margin-top: 0;
  }
  .flex-title::after {
    display: none;
  }
  .profile-picture {
    display: none;
  }
  .profile-picture.mobile {
    display: flex;
  }
}
</style>