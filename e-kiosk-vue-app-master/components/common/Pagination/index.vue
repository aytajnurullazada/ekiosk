<template>
  <div class="pagination-box" v-if="pageIndex != paginationProp.maxPageIndex">
    <div class="center-button">
      <Btn @click="dispatch" :isDisabled="loading">
        Data çox məlumat yüklə
      </Btn>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/common/Buttons/";
export default {
  components: {
    Btn,
  },
  data() {
    return {
      filterProp: {},
      paginationProp: {},
      loading: false,
      pageSize: 20,
      pageIndex: 1,
    };
  },
  watch: {
    filter(value) {
      this.filterProp = value;
    },
    pagination(value){
        this.paginationProp = value;
    }
  },
  props: {
    action: {
      type: String,
      default: null,
    },
    pagination: {
      type: [Object, Array],
      default: {},
    },
    filter: {
      type: [Object, Array, Number, Boolean],
      default: {},
    },
  },

  methods: {
    async dispatch() {
      this.pageIndex++;
      if (this.action) {
        this.loading = true;
        await this.$store.dispatch(this.action, {
          data: {
            ...this.filterProp,
            pageSize: this.pageSize,
            pageIndex: this.pageIndex,
          },
          push: true,
        });
        this.loading = false;
      }
    },
  },
};
</script>

<style  scoped>
.pagination-box {
  width: 100%;
  position: relative;
  padding-top: 44px;
  padding-bottom: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center-button {
  width: 400px;
  position: relative;
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
}
</style>