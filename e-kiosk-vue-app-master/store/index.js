import Vuex from 'vuex';
import Common from './common/index.js';
import Local from './local/index.js';
import Auth from './auth/index.js';
import Home from './home/index.js';
import AllNumbers from './all-numbers/index.js';
import NewspaperDetail from './newspaper-detail/index.js';
new Vuex.Store({
    state: () => ({
    }),
    mutations: {
       
    },
    getters: {

    },
    actions: {
        
    },
    modules: {
        Local,
        Common,
        Auth,
        Home,
        AllNumbers,
        NewspaperDetail
    }
  })