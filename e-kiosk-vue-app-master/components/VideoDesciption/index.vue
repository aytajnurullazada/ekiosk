<template>
  <section class="video-box">
    <div class="video-section">
      <img class="video-banner" src="@/assets/images/video.png" />
      <div class="content-box">
        <div class="parent-info-box">
          <div class="title-box">
            <Typography>Necə istifadə etməli?</Typography>
          </div>
          <div class="description-box">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit arcu
              pulvinar eleifend mauris aliquam. Tempus vitae urna quisque massa
              ultrices sapien.
            </Typography>
          </div>
        </div>
        <div class="full-flex">
          <div class="play-btn" @click="redirectLink">
            <Play />
          </div>
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="right-text-box">
        <div class="title-right">
          <Typography>Necə istifadə etməli?</Typography>
        </div>
        <div class="description-right">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit arcu
            pulvinar eleifend mauris aliquam. Tempus vitae urna quisque massa
            ultrices sapien. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sit arcu pulvinar eleifend mauris aliquam. Tempus vitae urna
            quisque massa ultrices sapien.
          </Typography>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Typography from "@/components/common/Typography/";
import Play from "@/svgComponents/Play";
import gsap from "gsap";
export default {
  components: {
    Typography,
    Play,
  },
  methods:{
    redirectLink() {
      let link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
      link.href = process.env.HOME_VIDEO_LINK;
      link.target = "_blank";
      let event = new MouseEvent("click", {
        view: window,
        bubbles: false,
        cancelable: true,
      });
      link.dispatchEvent(event);
    }
  },
  mounted() {
    let videoBox = document.querySelector(".video-box");
    if (document.body.clientWidth > 768) {
      videoBox.addEventListener("mousemove", (e) => {
        gsap.from(".parent-info-box", {
          opacity: 0,
          x: -document.querySelector(".video-box").clientWidth / 2,
        });
        gsap.from(".play-btn", {
          y: -90,
        });
        gsap.to(".right-text-box", {
          y: -20,
          opacity: 1,
          delay: 2,
        });
      });
      videoBox.addEventListener("mouseleave", (e) => {
        gsap.to(".parent-info-box", {
          opacity: 1,
          x: 0,
          delay: 1,
        });
        gsap.to(".play-btn", {
          delay: 1,
          y: 0,
        });
      });
    }
  },
};
</script>

<style scoped>
.description-right {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #000;
}
.title-right {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 56px;
  line-height: 72px;
  color: #000;
  justify-content: center;
}
.right-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-text-box {
  transition: 2s;
  opacity: 0;
}
.play-btn {
  background: rgba(255, 255, 255, 0.14);
  border: 3px solid #ffffff;
  box-sizing: border-box;
  width: 104px;
  height: 104px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 50%;
  transition: 2s;
  position: relative;
}
.play-btn:hover{
  opacity: 0.6;
  transition: 0.3s;
}
.video-box {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.video-box:hover .video-section {
  width: 50%;
}
.full-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.video-box:hover .right-box {
  right: -0%;
  transition: 2s;
  width: 50%;
}
.parent-info-box {
  margin-bottom: 45px;
  transition: 2s;
}
.description-box {
  font-family: "Montserrat", sans-serif !important;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
}
.title-box {
  text-align: center;
  color: white;
  font-family: "Montserrat", sans-serif !important;
  font-style: normal;
  margin-bottom: 40px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 56px;
  line-height: 72px;
}
.video-section {
  width: 100%;
  transition: width 2s;
  height: 482px;
  position: relative;
  overflow: hidden;
}
.content-box {
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 900px;
  transition: 2s;
  transform: translate(-50%, -50%);
}

.right-box {
  width: 50%;
  right: -50%;
  position: absolute;
  top: 0;
  z-index: 9999;
  transition: 2s;
  padding-left: 40px;
  padding-right: 40px;
  background-color: white;
  height: 100%;
}
.video-section img {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 768px) {
  .video-section {
    height: 400px;
  }
  .title-box {
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 24px;
  }
  .content-box {
    width: 100% !important;
    min-width: 100% !important;
    padding-left: 16px;
    padding-right: 16px;
  }
  .parent-info-box {
    margin-bottom: 24px;
  }
  .video-section {
    width: 100% !important;
  }
  .right-box {
    display: none !important;
  }
  .play-btn {
    width: 64px;
    height: 64px;
  }
  .description-box {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
  }
}
</style>

