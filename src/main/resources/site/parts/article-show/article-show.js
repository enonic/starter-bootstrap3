var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/thymeleaf')
};

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('article-show.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {
        var model = {};

        var result = libs.portal.getContent();

        model.title = result.data.title;
        model.preface = result.data.preface;
        model.bodyText = libs.portal.processHtml({
            value: result.data.bodyText
        });
        model.image = result.data.image;

        return model;
    }

    return {
        body: libs.thymeleaf.render(view, model)
    };
}