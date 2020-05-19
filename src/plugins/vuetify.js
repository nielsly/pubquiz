import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#114F7C",
        secondary: "#2A2021",
        tertiary: "#091E49",
        accent: "#1780AD",
        softAccent: "#50B8D6",
        error: "#F33D49",
        info: "#1989F2",
        success: "#38A843",
        warning: "#F0B514",
        activeButton0: "#99C3E7",
        activeButton1: "#F4A2A9",
        activeButton2: "#A3D0A5",
        activeButton3: "#F8DB8D",
        activeButton4: "#C6B4D1",
        activeButton5: "#F9BC96",
        button0: "#1989F2",
        button1: "#F33D49",
        button2: "#38A843",
        button3: "#F0B514",
        button4: "#86639E",
        button5: "#F47320"
      }
    }
  }
});
