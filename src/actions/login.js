
import Promise from 'es6-promise';
 

export const LOGIN_PENDING="LOGIN_PENDING";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_ERROR="LOGIN_ERROR";

export function Login(username,password,history){
    return dispatch => {

        sendLoginRequest(username,password)
        .then(success => {
            localStorage.setItem('user',JSON.stringify(username))
            dispatch({
                type:LOGIN_SUCCESS,
                payload:username
                
            });
            history.push('/admin')
            
        })
        .catch(err=> {
            dispatch({
                type:LOGIN_ERROR,
                payload:err
            });
        })
    }
}

function sendLoginRequest(username,password){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(username==="iletisim" && password === "iletisim"){
                return resolve(true)
            }
            else{
                return reject(new Error('hatalı giris'));
            }
        },1000)
    });
}



