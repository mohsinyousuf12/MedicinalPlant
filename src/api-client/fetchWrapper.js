import { getApiConfigsV2 } from "./configsV2";

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

const BASE_API_URL = "";

async function get(API_ENDPOINT) {
  const requestOptions = {
    ...getApiConfigsV2(BASE_API_URL + API_ENDPOINT),
    method: "GET",
  };

  return fetch(BASE_API_URL + API_ENDPOINT, requestOptions).then(
    handleResponse
  );
}

function post(API_ENDPOINT, body) {
  const requestOptions = {
    ...getApiConfigsV2(BASE_API_URL + API_ENDPOINT),
    method: "POST",
    body: JSON.stringify(body),
  };
  return fetch(BASE_API_URL + API_ENDPOINT, requestOptions).then(
    handleResponse
  );
}

function put(API_ENDPOINT, body) {
  const requestOptions = {
    ...getApiConfigsV2(API_ENDPOINT),
    method: "PUT",
    body: JSON.stringify(body),
  };
  return fetch(BASE_API_URL + API_ENDPOINT, requestOptions).then(
    handleResponse
  );
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(API_ENDPOINT) {
  const requestOptions = {
    ...getApiConfigsV2(BASE_API_URL + API_ENDPOINT),
    method: "DELETE",
  };
  return fetch(BASE_API_URL + API_ENDPOINT, requestOptions).then(
    handleResponse
  );
}

// helper functions
function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
