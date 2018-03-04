import qs from 'qs'

export const favoritesService = {
    fetchFavoritesTracks
};

function fetchFavoritesTracks() {
    return fetch('http://localhost:4000/api/tracks/get')
        .then(response => handleResponse(response))
        .catch(err => Promise.reject(err.message));
    }

function handleResponse(response) {
    return (!response.ok) ? Promise.reject(response.statusText) : response.json()
}