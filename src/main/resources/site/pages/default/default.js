var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var menu = require('/lib/enonic/menu');
var UTIL = require('/lib/enonic/util/util');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var site = portal.getSite(); // Current site
    var content = portal.getContent(); // Current content
    var view = resolve('default.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {

        var model = {};
        model.mainRegion = content.page.regions['main'];
        model.sitePath = site['_path'];
        model.currentPath = content._path;
        model.pageTitle = getPageTitle();
        model.metaDescription = getMetaDescription();
        model.menuItems = menu.getMenuTree(3);
        model.siteName = site.displayName;

        UTIL.log(model);

        return model;
    }

    function getPageTitle() {
        return content['displayName'] + ' - ' + site['displayName'];
    }

    function getMetaDescription() {
        var htmlMeta = getExtradata(content, 'html-meta');
        var metaDescription = htmlMeta.htmlMetaDescription || '';
        return metaDescription;
    }

    function getExtradata(content, property) {
        var appNamePropertyName = app.name.replace(/\./g,'-');
        // Short way of getting nested objects
        // http://blog.osteele.com/posts/2007/12/cheap-monads/
        var extraData = ((content.x || {})[appNamePropertyName] || {})[property] || {};
        return extraData;
    }

    return {
        body: thymeleaf.render(view, model)
    };
}