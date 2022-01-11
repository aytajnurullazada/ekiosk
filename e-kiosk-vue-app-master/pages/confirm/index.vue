<template>
  <div class="loader-box">
    <div class="center-loader">
      <img src="@/assets/images/loader.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let token = this.$route.query.token;
    if (!token) {
      this.$nuxt.error({
        statusCode: 404,
        message: "Belə Bir Səhifə Tapilmadı",
      });
    } else {
      this.$store
        .dispatch("auth/confirmAccount", decodeURI(token))
        .then((res) => {
          this.$router.push("/auth");
        })
        .catch((err) => {
          this.$nuxt.error({
            statusCode: 404,
            message: "Belə Bir Səhifə Tapilmadı",
          });
        });
    }
  },
};
</script>

<style  scoped>
.center-loader {
  position: absolute;
  left: 50%;
  width: 100px;
  height: 100px;
  top: 50%;
  transform: translate(-50%, -50%);
}
.center-loader img {
  width: 100%;
  height: 100%;
}
.loader-box {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>