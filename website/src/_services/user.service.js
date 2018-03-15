// import { authHeader } from '../_helpers';
import qs from 'qs'
import axios from 'axios'


export const userService = {
    login,
    logout,
    register,
};

function login({username, password}) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: qs.stringify({ email : username, password : password })
    };

    return axios.post('http://localhost:4000/api/auth/login',  qs.stringify({ email : username, password : password }))
        .then(response => {
            return (response.statusText !== 'OK') ? Promise.reject(response.statusText) : response.data
        })
        .then(user => {
            if (user && user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: qs.stringify(user)
    };

    return axios.post('http://localhost:4000/api/auth/register', qs.stringify(user))
        .then(response => {
            console.log(response);
            return (response.statusText !== 'OK' && response.statusText !== 'Created') ? Promise.reject(response.statusText) : response.data
        })
        .then(user => {
            if (user && user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
    }


function handleResponse(response) {
    return (response.statusText !== 'OK') ? Promise.reject(response.statusText) : response.data
}