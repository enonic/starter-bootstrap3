var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var contentSvc = require('/lib/xp/content');
var UTIL = require('/lib/enonic/util/util');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('article-list-latest.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {
        var model = {};

        model.articles = getArticles();

        return model;
    }

    function getArticles() {

        // This will get any article content published on the site
        var result = contentSvc.query({
            start: 0,
            count: 2,
            sort: '_modifiedTime DESC',
            contentTypes: [app.name + ':article']
        });

        return result.hits;
    }

    return {
        body: thymeleaf.render(view, model)
    };
}