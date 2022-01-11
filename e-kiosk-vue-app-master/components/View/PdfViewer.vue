<template>
  <div class="parent-box" v-if="images">
    <transition name="fade" mode="out-in">
      <PdfViewerFullScreen
        v-if="isShow"
        @close="isShow = false"
        :isShow="isShow"
      >
        <Flipbook
          @flip-right-end="runAudio($event)"
          @flip-left-end="runAudio($event)"
          v-if="images"
          class="flipbook-modal"
          :pages="images"
        />
      </PdfViewerFullScreen>
    </transition>
    <div class="flip-book" :class="{ activeZoom: zoom > 1 }">
      <Flipbook
        @flip-right-end="runAudio($event)"
        @flip-left-end="runAudio($event)"
        v-slot="flipbook"
        v-if="images"
        class="flipbook"
        :pages="images"
        @zoom-start="zoomControl($event)"
        @zoom-end="zoomControl($event)"
      >
        <div class="flex-bottom-box" :class="{ activeZoom: zoom > 1 }">
          <div class="flex-three-btn">
            <Btn
              :loader="500"
              mode="dark"
              @click="flipbook.flipLeft"
              :onlyIcon="true"
            >
              <template v-slot:icon>
                <span class="svg-24"><ArrowLeftSvg /></span>
              </template>
            </Btn>
            <Btn mode="dark" :icon="false">
              <div class="button-text">
                <Typography> {{ activePage }}/{{ totalPage }} </Typography>
              </div>
            </Btn>
            <Btn
              :loader="500"
              mode="dark"
              @click="flipbook.flipRight"
              :onlyIcon="true"
            >
              <template v-slot:icon>
                <span class="svg-24">
                  <ArrowRightSvg version="2" />
                </span>
              </template>
            </Btn>
          </div>
          <div class="zoom-parent">
            <div class="zoom-item">
              <Btn mode="dark" @click="flipbook.zoomOut" :onlyIcon="true">
                <template v-slot:icon>
                  <ZoomOutSvg />
                </template>
              </Btn>
            </div>
            <div class="zoom-item">
              <Btn mode="dark" @click="flipbook.zoomIn" :onlyIcon="true">
                <template v-slot:icon>
                  <ZoomInSvg />
                </template>
              </Btn>
            </div>
          </div>
          <div class="full-screen">
            <Btn mode="dark" :onlyIcon="true" @click="isShow = true">
              <template v-slot:icon>
                <FullScreenSvg />
              </template>
            </Btn>
          </div>
        </div>
      </Flipbook>
    </div>
  </div>
  <Loading v-else />
</template>

<script>
import PdfViewerFullScreen from "./PdfViewerFullScreen";
import Typography from "@/components/common/Typography/";
import Btn from "@/components/common/Buttons/IconBtn";
import ArrowRightSvg from "@/svgComponents/ArrowRight";
import ArrowLeftSvg from "@/svgComponents/ArrowLeft";
import ZoomInSvg from "@/svgComponents/ZoomIn";
import ZoomOutSvg from "@/svgComponents/ZoomOut";
import FullScreenSvg from "@/svgComponents/FullScreen";
import Sound from "@/assets/sounds/start-flip.mp3";
import Loading from "@/components/common/Loading/";
export default {
  head: {
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.228/pdf.min.js",
      },
    ],
  },
  props: {
    data: {
      type: [Array, Object, Boolean],
      default: null,
    },
  },
  data() {
    return {
      isShow: false,
      zoom: 1,
      images: null,
      audio: null,
      totalPage: null,
      activePage: 1,
    };
  },
  components: {
    PdfViewerFullScreen,
    ArrowLeftSvg,
    ZoomOutSvg,
    ArrowRightSvg,
    FullScreenSvg,
    ZoomInSvg,
    Loading,
    Typography,
    Btn,
  },
  watch: {
    isShow(value) {
      if (value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    data(value) {
        this.createPages(value.filePath);

      if (value && value.filePath) {
        this.createPages(value.filePath);
      } else {
      }
    },
  },
  deactivated() {
    document.body.style.overflow = "auto";
  },
  methods: {
    zoomControl(event) {
      this.zoom = event;
    },
    runAudio(event) {
      this.audio = new Audio(Sound);
      this.audio.play();
      this.activePage = event;
    },
    createPages(pdfLink) {
      let thisIs = this;
      var images = [null];
      let i = 1;
      var _PDF_DOC,
        _TOTAL_PAGES,
        _CANVAS = document.createElement("canvas");

      _CANVAS.width = 595;
      async function showPDF(pdf_url) {
        try {
          _PDF_DOC = await pdfjsLib.getDocument({ url: pdf_url });
          showPage(i);
          _TOTAL_PAGES = _PDF_DOC.numPages;
          thisIs.totalPage = _PDF_DOC.numPages;
        } catch (error) {
          thisIs.$nuxt.error({
            statusCode: 404,
            message: "Belə Bir Səhifə Tapilmadı",
          });
        }
      }

      async function showPage(page_no) {
        try {
          var page = await _PDF_DOC.getPage(page_no);
        } catch (error) {}

        if (page) {
          var viewport = page.getViewport(1.5);

          _CANVAS.height = viewport.height;
          _CANVAS.width = viewport.width;


          var render_context = {
            canvasContext: _CANVAS.getContext("2d"),
            viewport: viewport,
          };

          try {
            await page.render(render_context);
            images.push(_CANVAS.toDataURL("image/jpeg", 0.8));
          } catch (error) {}

          if (i <= _TOTAL_PAGES) {
            i++;
            showPage(i);
          }
          if (i == _TOTAL_PAGES) {
            thisIs.images = images;
          }
        }
      }
      showPDF(pdfLink);
    },
  },
  mounted() {
    this.$store.commit("common/initializeSound");
  },
};
</script>
<style>
.flip-book .viewport {
  height: 704px !important;
}
@media screen and (max-width: 991px) {
  .flip-book .viewport {
    height: 500px !important;
  }
  .flex-bottom-box {
    padding-top: 24px;
  }
}
</style>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: 0.6s;
}
.flipbook-modal {
  height: 100%;
  width: 100% !important;
}
.flipbook {
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row-reverse;
}
.zoom-item *,
.svg-24 {
  font-size: 24px !important;
}
.button-text {
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
}
.flex-three-btn {
  display: flex;
  align-items: center;
  margin-right: 12px;
}
.zoom-parent {
  display: flex;
  align-items: center;
  position: relative;
}
.zoom-item {
  margin-right: 12px;
}
.parent-box {
  width: 100%;
}
.flex-bottom-box {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding-top: 24px;
}
.flipbook {
  width: 100%;
  height: 100%;
}
.flip-book {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 991px) {
  .flip-book {
    height: auto;
  }
  .flip-book .viewport {
    height: 500px !important;
  }
}
@media screen and (max-width: 500px) {
  .flex-bottom-box {
    flex-wrap: wrap;
  }
  .flex-three-btn {
    margin-right: 0;
    width: 100%;
    margin-bottom: 24px;
  }
}
</style>