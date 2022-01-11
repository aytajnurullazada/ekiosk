<template>
  <div class="notfications-parent" v-if="getNotfications.length > 0">
    <div class="notfication-item" v-for="(item, index) in getNotfications" :key="index">
      <div class="circle-item" :class="{ active: !item.isRead }"></div>
      <div class="text-box">
        <Typography>
            <b>{{item.title}}: </b>
            {{item.description}}
        </Typography>
      </div>
    </div>
  </div>
  <DataNotFound v-else/>
</template>

<script>
import Typography from "@/components/common/Typography/";
import DataNotFound from '@/components/common/DataNotFound/';
export default {
  components: {
    Typography,
    DataNotFound
  },
  computed: {
    getNotfications() {
      return this.$store.getters["auth/getNotfications"];
    }
  },
  mounted() {
    this.$store.dispatch('auth/readNotfications');
  },
};
</script>

<style  scoped>
.notfications-parent {
  width: 100%;
  border: 1px solid #505050;
  background: #1a1a1a;
  position: relative;
}
.notfication-item:not(:last-child) {
  border-bottom: 1px solid #505050;
}
.notfication-item {
  min-height: 80px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
}
.circle-item {
  margin-right: 16px;
  width: 8px;
  height: 8px;
  min-width: 8px;
  border-radius: 50%;
  position: relative;
  background: #505050;
}
.circle-item.active {
  background: #5387ed;
}
.text-box {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
@media screen and (max-width: 500px) {
  .notfication-item {
    padding-left: 12px;
    padding-right: 12px;
  }
  .text-box {
    font-family: "Roboto", sans-serif;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
}
</style>