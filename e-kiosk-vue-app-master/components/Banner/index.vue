<template>
  <section class="banner image-banner">
    <img :class="{ active: isLoad }" src="@/static/images/banner.png" alt="" />
    <div class="nav-left-menu">
      <ul>
        <li>
          <Typography @click="$router.push('/auth')">
            Qeydiyyatdan keç
          </Typography>
        </li>
        <li>
          <Typography @click="$router.push('/auth')"> Daxil ol </Typography>
        </li>
      </ul>
    </div>
    <div class="left-mail-box" @click="$router.push('/contact')">
      <MailSvg />
    </div>
    <div class="content-box head-banner">
      <Container mode="inner">
        <div class="full-width-box">
          <div class="absolute-left-border"></div>
          <div class="diviver-horizontal"></div>
          <div class="text-content">
            <div class="text-box" ref="textBox">
              <Typography>
                Bütün qəzetlər, <br />
                jurnallar hamısı <br />
                bir portalda
              </Typography>
            </div>
            <div class="description-box">
              <Typography>
                Oxucular, yazarlar, jurnalistlər, ekspertlər üçün ilk platforma
              </Typography>
            </div>
          </div>
          <div
            class="absolute-more-information"
            @click="$router.push('/all-newspapers')"
          >
            <span class="text">
              <Typography> Ətraflı məlumat əldə et </Typography>
            </span>
            <ArrowRight />
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import ArrowRight from "@/svgComponents/ArrowRight";
import Container from "@/components/common/Container/";
import Typography from "@/components/common/Typography/";
import MailSvg from "@/svgComponents/Mail";
export default {
  data() {
    return {
      isLoad: false,
    };
  },
  mounted() {
    this.isLoad = true;
    gsap.from(this.$refs.textBox, {
      opacity: 0,
      y: -100,
      delay: 1,
    });
    gsap.to(this.$refs.textBox, {
      opacity: 1,
      y: 0,
      delay: 1,
    });
    let img = document.querySelector(".head-banner");
    img.addEventListener("mousemove", (e) => {
      let x = e.clientX / 100;
      let y = e.clientY / 100;
      gsap.to(img, {
        rotationY: x,
        rotationX: y,
        transformPrespective: 1000,
      });
    });
  },
  components: {
    Typography,
    Container,
    ArrowRight,
    MailSvg,
  },
};
</script>

<style scoped>
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
.left-mail-box {
  width: 120px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 9999;
}
.left-mail-box svg {
  cursor: pointer !important;
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

.text {
  margin-right: 32px;
}
.full-width-box {
  width: 100%;
  height: 100%;
  padding-left: 102px;
  position: relative;
}
.absolute-more-information {
  position: absolute;
  bottom: 92px;
  padding-bottom: 17px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.absolute-more-information::before {
  position: absolute;
  bottom: 0;
  height: 1px;
  width: 0%;
  content: "";
  transition: 0.3s;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
}
.absolute-more-information:hover::before {
  position: absolute;
  bottom: 0;
  height: 1px;
  width: 100%;
  transition: 0.3s;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  background-color: white;
}
.absolute-more-information::after {
  position: absolute;
  bottom: 0;
  height: 1px;
  width: 100%;
  opacity: 0.3;
  content: "";
  background-color: white;
}
.text-content {
  padding-top: 88px;
}
.absolute-left-border {
  height: 1px;
  position: absolute;
  bottom: 92px;
  opacity: 0.3;
  left: -100%;
  width: 100%;
  background-color: white;
}

.text-box {
  font-style: normal;
  font-weight: 300;
  transition: 1s;
  font-size: 72px;
  line-height: 72px;
  font-weight: 300;
  opacity: 0;
  margin-bottom: 40px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
}
.text-box * {
  color: white !important;
  background-color: transparent !important;
}
.description-box {
  font-family: "Gilroy";
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.diviver-horizontal {
  width: 1px;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0.3;
  background-color: #ffffff;
}
.banner {
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(26, 26, 28, 0.74),
    rgba(26, 26, 28, 0.74)
  );
  position: relative;
  height: 738px;
  padding-top: 92px;
  overflow: hidden;
}
.content-box {
  width: 100%;
  position: sticky;
  height: 100%;
  z-index: 999;
}
.content-box .container {
  position: relative;
  height: 100%;
}
.banner img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  object-fit: cover;
  transform-origin: left top;
}
@media screen and (max-width: 1199px) {
  .nav-left-menu,
  .left-mail-box {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .diviver-horizontal {
    display: none;
  }
  .text-box {
    width: 99%;
    line-height: 37px;
    font-weight: 300;
    font-size: 30px;
    margin-bottom: 16px;
  }
  .banner {
    height: 568px;
  }
  .full-width-box {
    padding-left: 0px;
  }
  .absolute-more-information {
    left: 50%;
    white-space: nowrap;
    transform: translateX(-50%);
    bottom: 72px;
  }
  .absolute-left-border {
    display: none;
  }
}
.banner img.active {
  animation: scale 2000ms ease-in-out forwards;
}
@keyframes scale {
  to {
    transform: scale(1.2);
  }
}
</style>