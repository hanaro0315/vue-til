import axios from "axios";

function registerUser(userData){
    const url = 'http://localhost:3001/signup';
    return axios.post(url, userData).then((res) => {
        console.log('res', res);
    }).catch((err) => {
        console.log('err', err);
    });
}

export {registerUser}