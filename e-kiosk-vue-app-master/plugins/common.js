import Vue from 'vue';
import VueTilt from 'vue-tilt.js';
import VueTyperPlugin from 'vue-typer';
import { VueHammer } from 'vue2-hammer';
import vueScrollTrigger from 'vue-scroll-trigger';
import VueMask from 'v-mask';
import VueGoogleMap from 'vuejs-google-maps';
import 'csshake';
import 'vuejs-google-maps/dist/vuejs-google-maps.css';
Vue.use(VueGoogleMap, {
    load: {
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
        libraries: [/* rest of libraries */]
    }
})
Vue.prototype.$calcRaitings = (value) => {
    let star_1 = value.findIndex((i) => i.count == 1);
    let star_2 = value.findIndex((i) => i.count == 2);
    let star_3 = value.findIndex((i) => i.count == 3);
    let star_4 = value.findIndex((i) => i.count == 4);
    let star_5 = value.findIndex((i) => i.count == 5);

    let value1 = 0,
      value2 = 0,
      value3 = 0,
      value4 = 0,
      value5 = 0;

    if (star_1 > -1) {
      value1 = value[star_1].value;
    }
    if (star_2 > -1) {
      value2 = value[star_2].value;
    }
    if (star_3 > -1) {
      value3 = value[star_3].value;
    }
    if (star_4 > -1) {
      value4 = value[star_4].value;
    }
    if (star_5 > -1) {
      value5 = value[star_5].value;
    }

    let allRate =
      (5 * value5 + 4 * value4 + 3 * value3 + 2 * value2 + 1 * value1) /
      (value1 + value2 + value3 + value4 + value5);

    return allRate.toFixed(2) > 0 ? allRate.toFixed(2) : 0;
}
Vue.use(VueMask);
Vue.use(vueScrollTrigger, {
    activeClass: 'active' // active is the default triggered className
});
Vue.use(VueTyperPlugin)
Vue.use(VueHammer)
Vue.use(VueTilt)


