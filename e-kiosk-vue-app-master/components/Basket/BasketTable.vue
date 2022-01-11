<template>
  <div class="box-cards" v-if="getBasketList.length > 0">
    <table>
      <thead>
        <tr>
          <td></td>
          <td>
            <div class="bg-box">
              <Typography> Məhsulun adı </Typography>
            </div>
          </td>
          <td>
            <div class="bg-box">
              <Typography> Alışın növü </Typography>
            </div>
          </td>
          <td>
            <div class="bg-box">
              <Typography> Məbləğ </Typography>
            </div>
          </td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getBasketList" :key="index">
          <td>
            <div class="image-box">
              <img :src="item.coverImgPath" alt="" />
            </div>
          </td>
          <td>
            <div class="text-box">
              <Typography> {{item.name}} </Typography>
            </div>
          </td>
          <td>
            <div class="text-box">
              <Typography> {{item.periodicity}} </Typography>
            </div>
          </td>
          <td>
            <div class="text-box">
              <Typography> {{item.price}} AZN </Typography>
            </div>
          </td>
          <td>
            <div class="flex-download">
              <CloseSvg @click="removeBasket(item.circulationId)"/>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="cards-box">
      <div class="card-item" v-for="(item, index) in getBasketList" :key="index">
        <div class="image-box-card">
          <img src="@/assets/images/history.png" alt="" />
        </div>
        <div class="content-box">
          <div class="box-texts">
            <div class="card-title">
              <Typography>Azərbaycan qəzeti</Typography>
              <div class="right-item">
                  <CloseSvg @click="removeBasket(item.circulationId)" color="#5387ED"/>
              </div>
            </div>
            <div class="card-desc">
              <Typography>01.08.2021</Typography>
            </div>
          </div>
          <div class="bottom-flex-item">
              <div class="price-card">
                    <Typography> 12.50 AZN </Typography>
              </div>
              <div class="subscribe">
                  <Typography> / Aylıq abunə </Typography>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-right-items">
        <div class="price-right">
              <Typography>Cəmi: {{allPrice}} AZN</Typography>
        </div>
        <div class="button-box">
          <Btn :icon="false">Ödəniş səhifəsinə keç</Btn>
        </div>
    </div>
  </div>
  <DataNotFound v-else/>
</template>

<script>
import Btn from '@/components/common/Buttons/';
import Typography from "@/components/common/Typography/";
import DataNotFound from '@/components/common/DataNotFound/';
import CloseSvg from "@/svgComponents/Close";
export default {
  components: {
    Typography,
    CloseSvg,
    Btn,
    DataNotFound
  },
  methods: {
    removeBasket(id){
      this.$store.dispatch('auth/removeBasket', id);
    }
  },
  computed: {
    allPrice(){
       return this.$store.getters['auth/getBasketList'].reduce((accumulator, current) => accumulator + current.price, 0).toFixed(2)
    },
    getBasketList(){
      return this.$store.getters['auth/getBasketList'];
    }
  }
};
</script>

<style  scoped>
.button-box{
  width: 282px;
}
.box-cards{
  display: inline-block;
}
.flex-right-items{
  display: flex;
  padding-top: 52px;
  align-items: center;
  justify-content: flex-end;
}
.price-right{
  margin-right: 22px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
}
.cards-box {
  display: none;
}
table {
  border: 1px solid #505050;
  background-color: #1a1a1a;
}
thead tr {
  width: 100%;
  border-bottom: 1px solid #505050;
  height: 60px;
}
thead tr td:not(:last-child) {
  border-right: 1px solid #505050;
}
tbody tr {
  height: 120px;
  border-bottom: 1px solid #505050;
}
tbody tr td:not(:last-child) {
  border-right: 1px solid #505050;
}
.image-box {
  width: 180px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-box img {
  max-width: 80%;
  max-height: 80%;
}
.bg-box {
  background-color: #272727;
  padding-right: 24px;
  height: 60px;
  display: flex;
  border-bottom: 1px solid #505050;
  align-items: center;
  padding-left: 24px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.text-box {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  padding-right: 24px;
  padding-left: 24px;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.flex-download {
  height: 60px;
  width: 100px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-download svg {
  cursor: pointer;
}
@media screen and (max-width: 992px) {
  .flex-right-items{
    display: block;
    padding-top: 24px;
  }
  .price-right{
    margin-bottom: 40px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
  }
  .button-box{
    width: 288px;
  }
  table {
    display: none;
  }
  .cards-box {
    display: block;
  }
  .card-item {
    width: 100%;
    min-height: 96px;
    display: flex;
    max-width: 400px;
    padding: 16px;
    background: #1a1a1a;
    border: 1px solid #505050;
    box-sizing: border-box;
  }
  .image-box-card {
    width: 48px;
    height: 64px;
    position: relative;
    min-width: 48px;
    margin-right: 12px;
  }
  .image-box-card img {
    width: 100%;
    height: 100%;
  }
  .content-box {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .box-texts{
      width: 100%;
  }
  .card-title {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .right-item{
      margin-left: auto;
  }
  .card-desc {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.72;
  }
  .bottom-flex-item{
      display: flex;
      width: 100%;
      margin-top: auto;
      align-items: flex-end;
  }
  .price-card{
      font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #5387ED;
    margin-right: 4px;
  }
  .subscribe{
      font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        opacity: 0.72;
  }
  .right-box{
      margin-left: auto;
      display: flex;
      align-items: center;
  }
  .card-item:not(:last-child){
      margin-bottom: 16px;
  }
}
</style>