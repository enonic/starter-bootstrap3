var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var contentSvc = require('/lib/xp/content');
var UTIL = require('/lib/enonic/util/util');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('article-list.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {
        var model = {};

        model.articles = getArticles();

        return model;
    }

    function getArticles() {
        var currentContent = portal.getContent();

        // This will get the article contents published as children of current content
        var result = contentSvc.getChildren({
            key: currentContent._path,
            start: 0,
            count: 100,
            contentTypes: ['article']
        });

        return result.hits;
    }

    return {
        body: thymeleaf.render(view, model)
    };
}