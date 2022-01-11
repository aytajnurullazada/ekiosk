export default function ({store, app, redirect}) {
    let token = app.$cookies.get('token');
    if(token){
        redirect('/home');
    }
    else{}
}