export default {
    namespaced: true,
    state: () => ({
        detail: null,
        numberArchive: [],
        comments: [],
        ratings: null,
        view: null
    }),
    mutations: {
        setNewspaperDetail(state, payload) {
            state.detail = payload;
        },
        setNumberArchive(state, payload) {
            state.numberArchive = payload;
        },
        setComments(state, payload) {
            state.comments = payload;
        },
        setView(state, payload) {
            state.view = payload;
        },
        setRate(state, payload) {
            const convertNumber = (value) => {
                let count = 0;
                if (value) {
                    switch (value.toUpperCase()) {
                        case 'I':
                            count = 1;
                            break;
                        case 'II':
                            count = 2;
                            break;
                        case 'III':
                            count = 3;
                            break;
                        case 'IV':
                            count = 4;
                            break;
                        case 'V':
                            count = 5;
                            break;
                        default:
                        // code block
                    }
                }
                return count;
            }
            let data = {
                allRate: 0,
                calcRate: 0,
                allRateNumbers: []
            }
            for (let i = 0; i < payload.length; i++) {
                data['allRate'] += convertNumber(payload[i].key) * payload[i].value;
                data['allRateNumbers'].push({
                    count: convertNumber(payload[i].key),
                    value: payload[i].value
                });
            }
            state.ratings = data;
        }
    },
    actions: {
        fetchView(vuexContext, id) {
           return this.$axios.post(`/api/editorial/numberdetatilinfo/${id}`, {}).then(res => {
                vuexContext.commit('setView', res.data.data);
                return res
            })
        },
        fetchEvaluationsCount(vuexContext, id) {
            this.$axios.get(`/api/expert/evaluationscountlist?Id=${id}`).then(res => {
                vuexContext.commit('setRate', res.data.data);
            }).catch(err => {
                return err.response.data;
            });
        },
        fetchNewspaperDetail(vuexContext, id) {
            return this.$axios.get(`/api/editorial/newspaperbyid/${id}`).then(res => {
                if (res.data.data) {
                    vuexContext.commit('setNewspaperDetail', res.data.data)
                }
                return res;
            }).catch(err => {
                return err.response.data;
            });
        },
        fetchComments(vuexContext, id) {
            this.$axios.get(`/api/expert/evaluationscommentslist?id=${id}`).then(res => {
                vuexContext.commit('setComments', res.data.data);
            }).catch(err => {
                return err.response.data;
            });
        },
        fetchNumberArchive(vuexContext, id) {
            this.$axios.get(`/api/editorial/newspapernumberslist?newspaperId=${id}`).then(res => {
                if (res.data.data.items) {
                    vuexContext.commit('setNumberArchive', res.data.data.items.slice(0, 15));
                }
            }).catch(err => {
                return err.response.data;
            });
        }
    },
    getters: {
        getView(state) {
            return state.view;
        },
        getRatings(state) {
            return state.ratings;
        },
        getComments(state) {
            return state.comments
        },
        getDetail(state) {
            return state.detail;
        },
        getNumberArchive(state) {
            return state.numberArchive;
        }
    }
}