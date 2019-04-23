// Allow configure path to chunk files.
//__webpack_public_path__ = window.resourceBaseUrl;

import Vue from 'vue'
import Vuex from 'Vuex'
import ComponentA from './components/common/SelectUsoCFDI.vue'

// Allow vue use vuex for store
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        login(state, user) {
            state.user = user;
        }
    }
});

export default {
  components: {
    ComponentA
  },
}

var vue = new Vue({
    el: '#app',
    store,
    components: {
        ComponentA
    }
});
            
