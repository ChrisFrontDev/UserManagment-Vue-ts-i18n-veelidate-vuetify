import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import i18n from './i18n';

import en from '@/locales/en.json';
import pt from '@/locales/pt.json';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { en, pt },
    current: 'pt',
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
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
});
