export default ({store, app,  $axios }) => {
  let token = app.$cookies.get('token');
  if(token){
    $axios.setToken(token);
    store.commit('auth/setToken', token)
  }
}