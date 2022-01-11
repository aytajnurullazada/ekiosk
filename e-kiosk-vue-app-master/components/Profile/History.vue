<template>
  <div class="box-cards" v-if="getUserNewspapers.length > 0">
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
              <Typography> Tarix </Typography>
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
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getUserNewspapers" :key="index">
          <td>
            <div class="image-box">
              <img :src="item.coverImgPath" alt="" />
            </div>
          </td>
          <td>
            <div class="text-box">
              <Typography> {{ item.name }} No-{{ item.number }} </Typography>
            </div>
          </td>
          <td>
            <div class="text-box">
              <Typography> {{ getDate(item.numberDate) }} </Typography>
            </div>
          </td>
          <td>
            <div class="text-box">
              <Typography> {{ item.periodicity }} </Typography>
            </div>
          </td>
          <td>
            <div class="text-box">
              <Typography> {{ item.price }} AZN </Typography>
            </div>
          </td>
          <td>
            <div class="flex-download" >
              <DownloadSvg @click="download(item.filePath)"/>
            </div>
          </td>
           <td>
            <div class="flex-download" >
              <EyeOpenSvg color="#848484" @click="$router.push('/view/'+item.circulationId)"/>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="cards-box">
      <div
        class="card-item"
        v-for="(item, index) in getUserNewspapers"
        :key="index"
      >
        <div class="image-box-card">
          <img :src="item.coverImgPath" alt="" />
        </div>
        <div class="content-box">
          <div class="box-texts">
            <div class="card-title">
              <Typography>{{ item.name }} No-{{ item.number }}</Typography>
            </div>
            <div class="card-desc">
              <Typography>{{ getDate(item.numberDate) }}</Typography>
            </div>
          </div>
          <div class="bottom-flex-item">
            <div class="price-card">
              <Typography> {{ item.price }} </Typography>
            </div>
            <div class="subscribe">
              <Typography> / {{ item.periodicity }} </Typography>
            </div>
            <div class="right-box" >
              <div class="item-icon">
                 <DownloadSvg color="#5387ED" @click="download(item.filePath)"/>
              </div>
              <div class="item-icon">
                <EyeOpenSvg color="#5387ED" @click="$router.push('/view/'+item.id)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DataNotFound v-else/>
</template>

<script>
import moment from "moment";
import DataNotFound from '@/components/common/DataNotFound/';
import Typography from "@/components/common/Typography/";
import DownloadSvg from "@/svgComponents/Download";
import EyeOpenSvg from "@/svgComponents/EyeOpen";

export default {
  components: {
    Typography,
    DataNotFound,
    EyeOpenSvg,
    DownloadSvg,
  },
  created() {
    this.$store.dispatch("auth/getUserNewspaper");
  },
  methods: {
    getDate(payload) {
      return moment(payload).format("DD.MM.YYYY");
    },
    download(payload) {
      this.$axios({
        url: payload,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", "file.pdf");
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    },
  },
  computed: {
    getUserNewspapers() {
      return this.$store.getters["auth/getUserNewspapers"];
    },
  },
};
</script>

<style  scoped>
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
  .box-texts {
    width: 100%;
  }
  .card-title {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-bottom: 8px;
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
  .bottom-flex-item {
    display: flex;
    width: 100%;
    margin-top: auto;
    align-items: flex-end;
  }
  .price-card {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #5387ed;
    margin-right: 4px;
  }
  .subscribe {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.72;
  }
  .right-box {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
  .right-box .item-icon{
    margin-right: 24px;
  }
  .right-box .item-icon:last-child{
    margin-right: 0;
  }
  .card-item:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>