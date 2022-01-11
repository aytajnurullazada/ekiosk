export default {
    namespaced: true,
    state: () => ({
        allNumbers: [],
        pagination: [],
        numberList: []
    }),
    mutations: {
        setAllNumbers(state, payload){
            if(!payload.push){
                state.allNumbers = payload.data;
            }
            else{
                state.allNumbers = [...state.allNumbers, ...payload.data];
            }
        },
        setPagination(state, payload){
            state.pagination = payload;
        },
        setNumberList(state, payload){
           state.numberList = payload;
        }
    },
    actions: {
     async fetchAllNumbers(vuexContext, data){
         await this.$axios.post('/api/editorial/newspapersnumberslist?newspaperId=' + data.id, {...data.data}).then(res => {
              if(res?.data?.data){
                  const {maxPageIndex, pageIndex, pageSize, count, items} = res.data.data;
                  vuexContext.commit('setAllNumbers', {data:items, push: data.push });
                  vuexContext.commit('setPagination', {
                    maxPageIndex,
                    pageIndex,
                    pageSize,
                    count
                  });
              }
          }).catch(err => {
              console.log(err.reponse.data);
          })
      },
      fetchNewspaperNumbersList(vuexContext, id){
        this.$axios.get('/api/editorial/newspaper/numberslistbynewsid/'+id).then(res => {
            vuexContext.commit('setNumberList', res.data.data)
        }).catch(err => {
            console.log(err.reponse.data);
        });
     }
    },
    getters: {
        getAllNumbers(state){
            return state.allNumbers;
        },
        getPagination(state){
            return state.pagination;
        },
        getNumberList(state){
            return state.numberList;
        }
    }
}