import qs from 'qs'

export const favoritesService = {
    fetchFavoritesTracks,
    addFavoritesTracks,
    removeFavoritesTracks
};

function fetchFavoritesTracks() {
    return fetch('http://localhost:4000/api/tracks/get')
        .then(response => handleResponse(response))
        .catch(err => Promise.reject(err.message));
}

function addFavoritesTracks(item) {
    return fetch('http://localhost:4000/api/favorites/add', {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        method: "POST",
        body: qs.stringify({id : item._id})
    })
        .then(response => handleResponse(response))
        .catch(err => Promise.reject(err.message));
}

function removeFavoritesTracks(item) {
    return fetch('http://localhost:4000/api/favorites/' + item._id, {
        method: "DELETE",
    })
        .then(response => handleResponse(response))
        .catch(err => Promise.reject(err.message));
}




function handleResponse(response) {
    return (!response.ok) ? Promise.reject(response.statusText) : response.json()
}