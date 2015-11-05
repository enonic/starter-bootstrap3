var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('theme-example.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {
        var model = {};
        return model;
    }

    return {
        body: thymeleaf.render(view, model)
    };
}