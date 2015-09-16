var UTIL = require('/lib/enonic/util/util');
var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var me = this;

    function renderView() {
        var view = resolve('layout-2-col.html');
        var model = createModel();

        return {
            body: thymeleaf.render(view, model)
        };
    }

    function createModel() {
        me.component = portal.getComponent();

        var model = {};
        model.regions = getRegionsWithColumnInfo();

        return model;
    }

    function getColumnConfig() {
        var columnConfig = '50-50';
        if (me.component.config.columnConfig) {
            columnConfig = me.component.config.columnConfig;
        }

        return columnConfig;
    }

    function getColumnClasses() {
        var columnConfig = getColumnConfig();
        var columnPercentages = columnConfig.split('-');
        var columnClasses = [];
        for (var i = 0, len = columnPercentages.length; i < len; i++) {
            var columnClass = Math.round((columnPercentages[i] / 100) * 12);
            columnClasses.push('col-md-' + columnClass);
        }

        return columnClasses;
    }

    function getRegionsWithColumnInfo() {
        var regions = UTIL.region.get();
        var columnClasses = getColumnClasses();

        for (var i = 0, len = regions.length; i < len; i++) {
            regions[i].columnClass = columnClasses[i];
        }

        return regions;
    }

    return renderView();
}