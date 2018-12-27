const setAuthToken = (headers) => {
    if (localStorage.jwt) {
        return {
            ...headers,
            Authorization: `Bearer ${localStorage.jwt}`,
        };
    }
    return headers;
};

export default setAuthToken;
