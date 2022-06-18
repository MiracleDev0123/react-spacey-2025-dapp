import { config } from "../config";
import { authHeader } from "../_helpers";

export const userService = {
  getNonce,
  login,
  logout,
  getAssets,
  handleSubscribeEmail
};

async function getNonce(address) {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ address: address }),
  };

  return fetch(`${config.apiUrl}/login/nonce`, requestOptions)
    .then(handleResponse)
    .then((resp) => {
      if (resp.msg === "suc" && resp.data && resp.data.nonce) {
        return resp.data.nonce;
      }
      return "";
    });
}

async function login(address, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: 2, account: address, password: password }), // Question: ? type, password
  };

  let result = await fetch(`${config.apiUrl}/login`, requestOptions);
  let handled_result = await handleResponse(result);
  if (handled_result.msg === "suc") {
    const user = {
      address: address,
      jwt_token:
        handled_result.msg === "suc" ? handled_result.data.jwt_token : "",
    };

    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } else {
    return {};
  }
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function getAssets() {
  // console.log(authHeader());

  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({}),
  };

  return fetch(`${config.apiUrl}/user/assets`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // history.push('/home')
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function handleSubscribeEmail(email) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  };
  return fetch(`http://metaspace.spacey2025.com/metaspace/web/subscribe/newsletter/email`, requestOptions);
}
