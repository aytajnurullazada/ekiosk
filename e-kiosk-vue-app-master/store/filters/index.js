export default {
    namespaced: true,
    state: () => ({
        sortList: [],
        months: [],
        days: [],
        years: []
    }),
    mutations: {
        setSortList(state, payload){
            state.sortList = payload;
        }
    },
    actions: {
      fetchSortList(vuexContext){
          this.$axios.get('/api/editorial/newspaper/sortingslist').then(res => {
              if(res?.data?.data){
                  vuexContext.commit('setSortList', res.data.data);
              }
          }).catch(err => {
              console.log(err.reponse.data);
          })
      }
    },
    getters: {
        getSortList(state){
            return state.sortList;
        }
    }
}