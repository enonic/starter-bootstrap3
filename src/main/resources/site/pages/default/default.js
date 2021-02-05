var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/thymeleaf'),
    content: require('/lib/xp/content'),
    menu: require('/lib/menu')
};

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var site = libs.portal.getSite(); // Current site
    var content = libs.portal.getContent(); // Current content
    var view = resolve('default.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {

        var model = {};
        model.mainRegion = content.page.regions['main'];
        model.sitePath = site['_path'];
        model.currentPath = content._path;
        model.pageTitle = getPageTitle();
        model.metaDescription = getMetaDescription();
        model.menuItems = libs.menu.getMenuTree(3).menuItems;
        model.siteName = site.displayName;

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

    log.info(JSON.stringify(model.menuItems, null, 4));

    return {
        body: libs.thymeleaf.render(view, model)
    };
}
