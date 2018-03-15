import qs from 'qs'
import axios from 'axios'

export const tracksService = {
    fetchTracks
};

function fetchTracks() {
    return axios('http://localhost:4000/api/tracks/get')
        .then(response => handleResponse(response))
        .catch(err => Promise.reject(err.message));
}

function handleResponse(response) {
    return (response.statusText !== 'OK') ? Promise.reject(response.statusText) : response.data
}