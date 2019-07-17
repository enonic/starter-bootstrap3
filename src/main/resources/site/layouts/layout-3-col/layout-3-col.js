var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/thymeleaf'),
    bootstrapLayout: require('/lib/enonic/bootstrap-layout')
};

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('layout-3-col.html');
    var model = createModel();

    function createModel() {
        var model = {};
        var defaultColumnConfig = '33-33-33';
        model.regions = libs.bootstrapLayout.getRegionsWithColumnInfo(defaultColumnConfig);
        return model;
    }

    return {
        body: libs.thymeleaf.render(view, model)
    };
}