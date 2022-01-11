<template>
  <b-row>
    <div class="flex-box">
      <div class="flex-col" v-for="(item, index) in data" :key="index">
        <NewspaperCard :addBasket="true" :special="true" :data="item" />
      </div>
    </div>
  </b-row>
</template>

<script>
import NewspaperCard from "@/components/NewspaperCard/";
export default {
  components: {
    NewspaperCard,
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  }
};
</script>

<style  scoped>
.flex-box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.flex-col {
  width: 20%;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 40px;
}
@media screen and (max-width: 992px) {
  .flex-col {
    display: flex;
    justify-content: center;
    width: 50%;
  }
}
@media screen and (max-width: 500px) {
  .flex-col {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>