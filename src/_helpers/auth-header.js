export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.jwt_token) {
        return { 'Authorization': user.jwt_token };
    } else {
        return {};
    }
}