const setAuthToken = (headers) => {
    if (localStorage.jwtToken) {
        return {
            ...headers,
            Authorization: `${localStorage.jwtToken}`,
        };
    }
    return headers;
};

export default setAuthToken;
