import axios from "axios";

const instance = axios.create({
    baseURL: process.env.API_URL,
});


function registerUser(userData){
    // const url = 'http://localhost:3001/signup';
    // return axios.post(url, userData).then((res) => {
    //     console.log('res', res);
    // }).catch((err) => {
    //     console.log('err', err);
    // });

    return instance.post('/signup', userData)
            .then((res) => {
                console.log('res', res);
            })
            .catch((err) => {
                console.log('err', err);
            });
}

function loginUser(loginData){
    const url = 'http://localhost:3001/login';
    return axios.post(url, loginData).then((res) => {
        console.log('res', res);
    }).catch((err) => {
        console.log('err', err);
    });
}

export {registerUser, loginUser}