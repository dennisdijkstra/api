module.exports = (api) => {
    api.cache(false);
    return {
        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'],
    };
};
