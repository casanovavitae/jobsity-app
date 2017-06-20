export const logIn = (data) => {
    return{
        type: "AUTH_LOGIN",
        payload: data
    }
};

export const logOut = (data) => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');
    return{
        type: "AUTH_LOGOUT",
        payload: data
    }

};