module.exports = (models) => {
    return {
        messages: require("./messages")(models)
    };
};