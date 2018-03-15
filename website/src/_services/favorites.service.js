import qs from 'qs'
import axios from 'axios'

export const favoritesService = {
    fetchFavoritesTracks,
    addFavoritesTracks,
    removeFavoritesTracks
};

const getHeaders = function() {
    return {
        headers: {
            'authorization': (JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token : null)
        }
    }
}

function fetchFavoritesTracks() {
    return axios('http://localhost:4000/api/favorites/get', getHeaders())
        .then(response => handleResponse(response))
        .catch(err => Promise.reject(err.message));
}

function addFavoritesTracks(item) {
    // console.log(JSON.parse(localStorage.getItem('user')).token);
    return axios.post('http://localhost:4000/api/favorites/add', qs.stringify({id : item._id}), getHeaders())
        .then(response => handleResponse(response))
        .catch(err => Promise.reject(err.message));
}

function removeFavoritesTracks(item) {
    return axios.delete('http://localhost:4000/api/favorites/' + item._id, getHeaders())
        .then(response => handleResponse(response))
        .catch(err => Promise.reject(err.message));
}




function handleResponse(response) {
    return (response.statusText !== 'OK') ? Promise.reject(response.statusText) : response.data
}