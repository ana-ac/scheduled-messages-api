module.exports = (conf, services) => {
    // requirements
    const scheduled_messages_router = require("./messages")(services);

    return {
        route(app) {
            app.get("/messages", scheduled_messages_router.list);
            app.listen(conf.port);
        }
    };
}