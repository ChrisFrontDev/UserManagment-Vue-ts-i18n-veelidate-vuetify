import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/src/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#16A085',
        secondary: '#424242',
        accent: '#A3E4D7',
        error: '#FF5252',
        info: '#5DADE2',
        success: '#58D68D',
        warning: '#F8C471',
      },
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
});
