module.exports = (models) => {
    return { list };
    async function list() {
        return await models.Message.findAll();
    }
}