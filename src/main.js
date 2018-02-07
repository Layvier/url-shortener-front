require(`quasar/dist/quasar.${__THEME}.css`);
// ==============================

import Vue from 'vue';
import Quasar from 'quasar';
import VueClipboard from 'vue-clipboard2';
import VeeValidate from 'vee-validate';
import store from './store';

Vue.use(VueClipboard);
Vue.use(VeeValidate);
Vue.config.productionTip = false;
Vue.use(Quasar); // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font');
}
import 'quasar-extras/material-icons';
import 'quasar-extras/animate/fadeIn.css';
import 'quasar-extras/animate/fadeOut.css';

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    store,
    render: h => h(require('./App').default)
  });
});
