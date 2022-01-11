<template>
  <b-row>
    <div class="filter-flex">
      <div class="flex-col">
        <Select
          placeholder="Sıralama"
          @selected="selectSort($event)"
          selectKey="name"
          :data="sorts"
          :key="sortKey"
        />
      </div>
      <div class="flex-col">
        <Select
          :key="yearKey"
          @selected="selectYear($event)"
          placeholder="il"
          selectKey="name"
          :data="years"
        />
      </div>
      <div class="flex-col">
        <Select
          :key="monthKey"
          @selected="selectMonth($event)"
          :isDisabled="!filter.yearModel"
          placeholder="Ay"
          selectKey="name"
          :data="months"
        />
      </div>
      <div class="flex-col">
        <Select
          :key="dayKey"
          @selected="selectDay($event)"
          :isDisabled="!filter.monthModel"
          placeholder="Gün"
          selectKey="name"
          :data="days"
        />
      </div>
    </div>
  </b-row>
</template>

<script>
import moment from "moment";
import Select from "@/components/common/Select/";
export default {
  data() {
    return {
      filter: {
        yearModel: null,
        monthModel: null,
        dayModel: null,
        sortModel: null,
      },
      sorts: [{ name: "Filteri sil", clear: true }],
      yearKey: 0,
      sortKey: 0,
      monthKey: 0,
      dayKey: 0,
      years: [],
      days: [],
      months: [
        { name: "Filteri sil", clear: true },
        { name: "Yanvar", value: "01" },
        { name: "Fevral", value: "02" },
        { name: "Mart", value: "03" },
        { name: "Aprel", value: "04" },
        { name: "may", value: "05" },
        { name: "iyun", value: "06" },
        { name: "iyul", value: "07" },
        { name: "avqust", value: "08" },
        { name: "sentyabr", value: "09" },
        { name: "oktyabr", value: "10" },
        { name: "noyabr", value: "11" },
        { name: "dekabr", value: "12" },
      ],
    };
  },
  components: {
    Select,
  },
  watch: {
    getSortList(value) {
      this.sorts = [...this.sorts, ...value];
    },
  },
  methods: {
    selectSort(value) {
      if (value.clear) {
        this.filter.sortModel = null;
        this.sortKey++;
      } else {
        this.filter.sortModel = value;
      }
      this.$emit("filterChange", this.filter);
    },
    selectDay(value) {
      if (value.clear) {
        this.days = [];
        this.filter.dayModel = null;
        this.dayKey++;
      } else {
        this.filter.dayModel = value;
      }
      this.$emit("filterChange", this.filter);
    },
    selectYear(value) {
      this.filter.monthModel = null;
      this.filter.dayModel = null;
      if (value.clear) {
        this.yearKey++;
        this.filter.yearModel = null;
        this.days = null;
      } else {
        this.filter.yearModel = value;
      }
      this.$emit("filterChange", this.filter);
    },
    selectMonth(value) {
      this.filter.dayModel = null;
      this.days = null;
      if (value.clear) {
        this.monthKey++;
        this.filter.monthModel = null;
      } else {
        this.filter.monthModel = value;
        let month = this.filter.monthModel.value;
        let yearModel = this.filter.yearModel.name;
        let days = moment(`${yearModel}-${month}`, "YYYY-MM").daysInMonth();
        let daysData = [{ name: "Filteri sil", clear: true }];
        for (let i = 1; i <= days; i++) {
          daysData.push({ name: i, value: i });
        }
        this.days = daysData;
      }
      this.$emit("filterChange", this.filter);
    },
  },
  mounted() {
    let data = [];
    let newDate = new Date().getFullYear();
    for (let i = 2010; i <= newDate; i++) {
      data.push({
        name: i,
      });
      if (i == newDate) {
        data.push({ name: "Filteri sil", clear: true });
      }
    }
    this.years = data.reverse();
  },
  computed: {
    getSortList() {
      return this.$store.getters["all-newspapers/getSortList"];
    },
  },
};
</script>

<style  scoped>
.filter-flex {
  width: 100%;
  display: flex;
  padding: 0 !important;
  align-items: center;
  margin-bottom: 40px;
}
.flex-col {
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
}
.flex-col:first-child {
  min-width: 384px;
}
@media screen and (max-width: 991px) {
  .filter-flex {
    flex-wrap: wrap;
    margin-bottom: 0;
  }
  .flex-col:first-child {
    min-width: auto;
    width: 100%;
    max-width: 400px;
  }
  .flex-col {
    margin-bottom: 40px;
    width: 50%;
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>