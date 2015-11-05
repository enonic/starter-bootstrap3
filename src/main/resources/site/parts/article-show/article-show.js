var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('article-show.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {
        var model = {};

        var result = portal.getContent();

        model.title = result.data.title;
        model.preface = result.data.preface;
        model.bodyText = portal.processHtml({
            value: result.data.bodyText
        });
        model.image = result.data.image;

        return model;
    }

    return {
        body: thymeleaf.render(view, model)
    };
}