var thymeleaf = require('/lib/xp/thymeleaf');

// 404 page not found error
exports.handle404 = function (err) {
    var view = resolve('page-not-found.html');
    var model = {};
    return {
        body: thymeleaf.render(view, model)
    };
};

// Other error
exports.handleError = function (err) {
    var view = resolve('error.html');
    var model = createModel();

    var debugMode = err.request.params.debug === 'true';
    if (debugMode && err.request.mode === 'preview') {
        return;
    }

    function createModel() {
        var model = {};
        model.errorCode = err.status;
        model.errorMessage = err.message;

        return model;
    }

    return {
        body: thymeleaf.render(view, model)
    };
};