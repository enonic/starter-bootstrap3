var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/thymeleaf'),
    content: require('/lib/xp/content')
};

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
        var result = libs.content.query({
            count: 5,
            sort: 'modifiedTime DESC',
            contentTypes: [app.name + ':article']
        });


        return result.hits;
    }

    return {
        body: libs.thymeleaf.render(view, model)
    };
}