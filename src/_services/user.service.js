import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    getNonce,
    login,
    logout,
    getAssets
};

function getNonce(address) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({address: address})
    }

    return fetch(`${config.apiUrl}/login/nonce`, requestOptions)
        .then(handleResponse)
        .then(resp => {
            if(resp.msg === 'suc' && resp.data && resp.data.nonce) {
                return resp.data.nonce
            }
            return ''; 
        });
}

function login(address, password) {    
  
    return getNonce(address).then(
        nonce => {            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 2, account: address, password: password }) // Question: ? type, password
            };

            fetch(`${config.apiUrl}/login`, requestOptions)
                .then(handleResponse)
                .then(res => {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    if (res.msg === 'suc') {
                        const user = {
                            address: address,
                            nonce:   nonce,
                            jwt_token: res.msg === 'suc' ? res.data.jwt_token : '' }
                        
                        localStorage.setItem('user', JSON.stringify(user));
                        return user;
                    }
                    return res;                    
                });
        }

    )
        
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAssets() {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/web/user/assets`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
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