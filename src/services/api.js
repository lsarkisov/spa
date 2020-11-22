import { API_URL } from 'const/api'

function callApi(payload) {
  return fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      return response.clone().json()
    })
    .then((response) => response)
    .catch((error) => error)
}

/* Search
----------------------------------------*/
export const login = (payload) => callApi(payload)
