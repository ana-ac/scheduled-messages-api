// requirements
const messages = require('./../conf/messages');

module.exports = () => {
    const Message = {
        findAll: () => {
            return messages.data;
        }
    }
    return { Message };
}