export default function ({store, app, error, redirect}) {
    let token = app.$cookies.get('token');
    if(!token){
       error({ statusCode: 404, message: 'Belə Bir Səhifə Tapilmadı'})
    }
    else{}
}