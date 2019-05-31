var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/thymeleaf'),
    content: require('/lib/xp/content')
};

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
        var currentContent = libs.portal.getContent();

        // This will get the article contents published as children of current content
        var result = libs.content.getChildren({
            key: currentContent._path,
            start: 0,
            count: 20,
            contentTypes: ['article']
        });

        return result.hits;
    }

    return {
        body: libs.thymeleaf.render(view, model)
    };
}