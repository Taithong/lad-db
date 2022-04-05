import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        themes: {
            light: {
                primary: '#1874B7',
                secondary: '#b0bec5',
                accent: '#707070',
                error: '#b71c1c',
            },
        },
    },
});
