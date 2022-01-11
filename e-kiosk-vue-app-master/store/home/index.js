export default {
    namespaced: true,
    state: () => ({ 
        newspapersList: [],
        newspapersMostsale: [],
        lastNewspapers: []
    }),
    mutations: {
        setNewspapers(state, payload){
            state.newspapersList = payload;
        },
        setNewspapersMostsale(state, payload){
            state.newspapersMostsale = payload;
        },
        setLastNewspapers(state, payload){
            state.lastNewspapers = payload;
        }
    },
    actions: {
      fetchNewspaperAllList(vuexContext, filters){
          this.$axios.post('/api/editorial/newspapersnumberslist', {
              ...filters
          }).then(res => {
                vuexContext.commit('setNewspapers', res.data.data.items);
          }).catch(err => {
              console.log(err.response.data);
          });
      },
      fetchNewspaperMostsale(vuexContext, filters){
         this.$axios.get('/api/editorial/newspaper/statistic/mostsale').then(res => {
            vuexContext.commit('setNewspapersMostsale', res.data.data);
         }).catch(err => {
            console.log(err.response.data);
        });
      },
      fetchLastNewspapers(vuexContext, filters){
        this.$axios.get('/api/editorial/newspaperslastnumberslist').then(res => {
            vuexContext.commit('setLastNewspapers', res.data.data);
        }).catch(err => {
           console.log(err.response.data);
       });
     }
    },
    getters: {
      getNewspaperList(state){
          return state.newspapersList;
      },
      getNewspapersMostsale(state){
          return state.newspapersMostsale;
      },
      getLastNewspapers(state){
        return state.lastNewspapers;
      }
    }
}