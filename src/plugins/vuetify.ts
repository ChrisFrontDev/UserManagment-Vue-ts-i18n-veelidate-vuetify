import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import i18n from './i18n';

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
    t: (key: any, ...params: any) => i18n.t(key, params),
  },
});
