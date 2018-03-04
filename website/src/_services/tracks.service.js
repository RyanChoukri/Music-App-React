import qs from 'qs'

export const tracksService = {
    fetchTracks
};

function fetchTracks() {
    return fetch('http://localhost:4000/api/tracks/get')
        .then(response => handleResponse(response))
        .catch(err => Promise.reject(err.message));
    }

function handleResponse(response) {
    return (!response.ok) ? Promise.reject(response.statusText) : response.json()
}