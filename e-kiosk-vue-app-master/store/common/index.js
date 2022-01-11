import { event } from '@/event/';
export default {
    namespaced: true,
    state: () => ({
        tariffList: [],
        isShow: false,
        contactTypes: [],
        isSoundEnabled: true,
        socalLinks: null
    }),
    mutations: {
        setSocialLinks(state, payload){
            state.socalLinks = payload;
        },
        toggleSound(state) {
            state.isSoundEnabled = !state.isSoundEnabled;
            localStorage.setItem('isSoundEnabled', state.isSoundEnabled);
        },
        initializeSound(state) {
            const isSoundEnabled = JSON.parse(localStorage.getItem('isSoundEnabled'));
            if (!isSoundEnabled) {
                state.isSoundEnabled = false;
                localStorage.setItem("isSoundEnabled", false);
            } else if (isSoundEnabled) {
                state.isSoundEnabled = true;
                localStorage.setItem("isSoundEnabled", true);
            } else {
                state.isSoundEnabled = true;
                localStorage.setItem("isSoundEnabled", true);
            }
        },
        setTariffList(state, payload) {
            state.tariffList = payload;
        },
        menuIsShow(state) {
            state.isShow = !state.isShow;
        },
        closeMenu(state) {
            state.isShow = false;
        },
        setConactTypes(state, payload) {
            state.contactTypes = payload;
        }
    },
    actions: {
        fetchSocialLinks(vuexContext){
            this.$axios.get('/api/editorial/social/socialslink').then(res => {
                vuexContext.commit('setSocialLinks',res.data.data)
            }).catch(err => {
            })
        },
        fetchTariff(vuexContext, id) {
            this.$axios.get('/api/editorial/newspaper/tariffslist?newspaperId='+id).then(res => {
                vuexContext.commit('setTariffList', res.data.data);
            }).catch(err => {
                
            })
        },
        fetchNumberList(vuexContext, data) {
            this.$axios.get('/api/editorial/newspaper/numberslistbynewsid/' + data.id).then(res => {
                event.$emit('openNumberModal', {
                    ...data,
                    data: res.data.data
                });
            }).catch(err => {
                
            })
        },
        addContactPost(vuexContext, payload) {
            return this.$axios.post('/api/reader/addcontactpost', payload).then(res => {
                return res;
            })
        },
        fetchContactTypes(vuexContext) {
            this.$axios.get('/api/reader/contactposttypes').then(res => {
                vuexContext.commit('setConactTypes', res.data)
            }).catch(err => {
                
            })
        }
    },
    getters: {
        getSocialLinks(state){
            return state.socalLinks;
        },
        getIsSoundEnabled(state) {
            return state.isSoundEnabled;
        },
        getTariffList(state) {
            return state.tariffList;
        },
        getContactTypes(state) {
            return state.contactTypes
        },
        getIsShow(state) {
            return state.isShow
        }
    }
}