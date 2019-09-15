module.exports = ({ messages }) => {
    return {
        async list(req, res) {
          res.status(200).send(
            await messages.list()
          );
        }
    }
}