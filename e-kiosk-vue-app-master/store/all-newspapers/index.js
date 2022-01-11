export default {
    namespaced: true,
    state: () => ({
        allNewspaper: [],
        pagination: [],
        sortList: []
    }),
    mutations: {
        setAllNewspaper(state, payload){
            if(!payload.push){
                state.allNewspaper = payload.data;
            }
            else{
                state.allNewspaper = [...state.allNewspaper, ...payload.data];
            }
        },
        setPagination(state, payload){
            state.pagination = payload;
        },
        setSortList(state, payload){
            state.sortList = payload;
        }
    },
    actions: {
        fetchSortList(vuexContext){
            this.$axios.get("/api/editorial/newspaper/sortingslist").then(res => {
                vuexContext.commit('setSortList', res.data.data);
            }).catch(err => {
                console.log(err.reponse.data);
            });
        },
        async fetchAllNewspaper(vuexContext, payload){
           await this.$axios.post('/api/editorial/newspapersalllist', {...payload.data}).then(res => {
              if(res?.data?.data){
                  const {maxPageIndex, pageIndex, pageSize, count, items} = res.data.data;
                  vuexContext.commit('setAllNewspaper', {data:items, push: payload.push});
                  vuexContext.commit('setPagination', {
                    maxPageIndex,
                    pageIndex,
                    pageSize,
                    count
                  });
              }
          }).catch(err => {
              console.log(err.reponse.data);
          });
      }
    },
    getters: {
        getAllNewspaper(state){
            return state.allNewspaper;
        },
        getPagination(state){
            return state.pagination;
        },
        getSortList(state){
            return state.sortList;
        }
    }
}