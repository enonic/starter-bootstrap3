var portal = require('/lib/xp/portal');
var UTIL = require('/lib/enonic/util/util');

/**
 * Get all defined regions with proper Bootstrap column CSS class
 * @returns {Array}
 */
exports.getRegionsWithColumnInfo = function(defaultColumnConfig) {
    var regions = UTIL.region.get();
    var columnClasses = exports.getColumnClasses(defaultColumnConfig);

    for (var i = 0, len = regions.length; i < len; i++) {
        regions[i].columnClass = columnClasses[i];
    }

    return regions;
};

/**
 * Get Bootstrap type column CSS class based on layout column widths
 * @returns {Array}
 */
exports.getColumnClasses = function(defaultColumnConfig) {
    var columnConfig = getColumnConfig(defaultColumnConfig);
    var columnPercentages = columnConfig.split('-');
    var columnClasses = [];
    for (var i = 0, len = columnPercentages.length; i < len; i++) {
        var columnClass = Math.round((columnPercentages[i] / 100) * 12);
        columnClasses.push('col-md-' + columnClass);
    }

    return columnClasses;
};

/**
 * Get layout column config (column widths)
 * @returns {string}
 */
function getColumnConfig(defaultColumnConfig) {
    var columnConfig = defaultColumnConfig;
    var component = portal.getComponent(); // Current component
    if (component.config.columnConfig) {
        columnConfig = component.config.columnConfig;
    }

    return columnConfig;
}