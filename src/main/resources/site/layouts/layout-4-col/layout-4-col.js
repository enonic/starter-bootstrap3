var UTIL = require('/lib/enonic/util/util');
var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var bootstrapLayout = require('/lib/enonic/bootstrap-layout');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('layout-4-col.html');
    var model = createModel();

    function createModel() {
        var model = {};
        var defaultColumnConfig = '25-25-25-25';
        model.regions = bootstrapLayout.getRegionsWithColumnInfo(defaultColumnConfig);
        return model;
    }

    return {
        body: thymeleaf.render(view, model)
    };
}