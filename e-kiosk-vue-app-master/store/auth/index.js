export default {
    namespaced: true,
    state: () => ({
        token: null,
        user: null,
        notfications: [],
        favLists: [],
        userNewspapers: [],
        basketList: []
    }),
    mutations: {
        setUserNewspaper(state, payload) {
            state.userNewspapers = payload;
        },
        setNotfications(state, payload) {
            state.notfications = payload;
        },
        setFavsList(state, payload) {
            state.favLists = payload;
        },
        setToken(state, payload) {
            if (payload.update) {
                this.$cookies.set('token', payload.token, {
                    maxAge: 60 * 60 * 24 * 60
                });
                this.$axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + payload
                }
            }
            state.token = 'Bearer ' + payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        resetUser(state) {
            state.token = null;
            state.user = null;
            this.$cookies.remove('token');
            if (process.client) {
                window.location = '/'
            }
        },
        setBasketItems(state, payload){
            state.basketList = payload;
        },
        removeBasket(state, payload){
            let index = state.basketList.findIndex(i => i.circulationId == payload);
            if(index > -1){
                state.basketList.splice(index, 1);
            }
        }
    },
    actions: {
        subcribeSite(vuexContext, payload){
             return this.$axios.post('/api/reader/subscribeupdates', payload).then(res => {
                return res;
            })
        },
        hasNotf(vuexContext, payload){
            this.$axios.post("/api/reader/addsubscribe", payload).then(res => {
                //  your code
            }).catch(err => {
                console.error(err.response.data);
            })
        },
        confirmAccount(vuexContext, token){
            return this.$axios.get("/api/reader/approve?token="+token).then(res => {
                return res;
            });
        },
        addBasket(vuexContext, payload){
            return this.$axios.post("/api/reader/reader/addtobasket", payload).then(res => {
                return res;
            })
        },
        resetPassword(vuexContext, payload) {
            return this.$axios.get(`/api/reader/reader/confirmpassword?token=${payload.token}&password=${payload.password}&passwordConfirm=${payload.passwordConfirm}`).then(res => {
                return res;
            });
        },
        removeBasket(vuexContext, id){
            this.$axios.post("/api/reader/reader/addtobasket", {
                circulationId: id,
                inBasket: false,
                tarifId: 0
            }).then(res => {
                vuexContext.commit('removeBasket', id)
            }).catch(err => {
                console.error(err.response.data);
            })
        },
        getBasketList(vuexContext){
            if (this.$cookies.get('token')) {
                this.$axios.get('/api/reader/reader/getbasket').then(res => {
                    vuexContext.commit('setBasketItems', res.data);
                }).catch(err => {
                    console.error(err.response.data);
                })
            }
        },
        sendEmail(vuexContext, payload) {
            return this.$axios.post('/api/reader/reader/resetpasswordrequest', {
                email: payload
            }).then(res => {
                return res;
            })
        },
        register(vuexContext, payload) {
            return this.$axios.post('/api/account/register/reader', { ...payload }).then(res => {
                return res
            });
        },
        addfavorites(vuexContext, payload) {
            if (this.$cookies.get('token')) {
                this.$axios.post('/api/reader/addorremovefavorite', { ...payload }).then(res => {
                    // code box
                }).catch(err => {
                    console.error(err.response.data);
                })
            }
        },
        setProfile(vuexContext, payload) {
            return this.$axios.post('/api/reader/reader/readerprofiledit', { ...payload }).then(res => {
                return res;
            });
        },
        loginAccount(vuexContext, payload) {
            return this.$axios.post('/api/account', { userName: payload.email, password: payload.password }).then(res => {
                if (res.data.data.token) {
                    vuexContext.commit('setToken', { token: 'Bearer ' + res.data.data.token, update: true });
                }
                return res
            });
        },
        getNotfications(vuexContext) {
            if (this.$cookies.get('token')) {
                this.$axios.get('/api/reader/reader/notifications').then(res => {
                    vuexContext.commit('setNotfications', res.data);
                }).catch(err => {
                    console.error(err.response.data);
                })
            }
        },
        getUserFavs(vuexContext) {
            if (this.$cookies.get('token')) {
                this.$axios.get('/api/reader/reader/favoritenewspaper').then(res => {
                    vuexContext.commit('setFavsList', res.data);
                }).catch(err => {
                    console.error(err.response.data);
                })
            }
        },
        getUserNewspaper(vuexContext) {
            if (this.$cookies.get('token')) {
                this.$axios.get('/api/reader/reader/purchasednewspapers').then(res => {
                    vuexContext.commit('setUserNewspaper', res.data)
                }).catch(err => {
                    console.error(err.response.data);
                })
            }
        },
        addeval(vuexContext, payload) {
            if (this.$cookies.get('token')) {
                return this.$axios.post('/api/expert/evaluation/addeval', payload).then(res => {
                    return res;
                })
            }
        },
        getUserDetail(vuexContext, payload) {
            if (this.$cookies.get('token')) {
                this.$axios.get('/api/reader/reader/getprofile').then(res => {
                    vuexContext.commit('setUser', { ...res.data.user, isExpert: res.data.isExpert });
                }).catch(err => {
                    console.error(err.response.data);
                })
            }
        },
        readNotfications(vuexContext) {
            if (this.$cookies.get('token')) {
                this.$axios.post('/api/notification/setnotificationreadall', {}).then(res => {
                    // code box
                }).catch(err => {
                    console.error(err.response.data);
                })
            }
        }
    },
    getters: {
        getBasketList(state){
            return state.basketList;
        },
        getUserNewspapers(state) {
            return state.userNewspapers
        },
        getNotfications(state) {
            return state.notfications;
        },
        getNewNotfications(state) {
            return state.notfications.filter(x => x.isRead == false).length
        },
        getToken(state) {
            return state.token;
        },
        getUser(state) {
            return state.user;
        },
        getFavsList(state) {
            return state.favLists;
        },
        getFavsListId(state) {
            return state.favLists.map(i => {
                return i.id
            })
        },
        getIsExpert(state) {
            if (state.user && state.user.isExpert) {
                return true;
            }
            else {
                return false
            }
        },
        isAuth(state) {
            if (state.token != '' && state.token) {
                return true
            }
            else {
                return false;
            }
        }
    }
}