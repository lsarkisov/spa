import { API_URL } from 'const/api'

export default function callApi(payload: any) {
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
