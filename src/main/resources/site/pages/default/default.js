const libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/thymeleaf'),
    content: require('/lib/xp/content'),
    menu: require('/lib/menu')
};

const csp = 'default-src \'self\'; script-src \'self\' \'unsafe-eval\' ajax.googleapis.com unpkg.com; style-src \'self\' \'unsafe-inline\'; object-src \'none\'; img-src \'self\' data:';

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    const site = libs.portal.getSite(); // Current site
    const content = libs.portal.getContent(); // Current content
    const view = resolve('default.html'); // The view to render
    const isEditMode = req.mode === 'edit';
    const model = createModel(); // The model to send to the view

    function createModel() {
        return {
            mainRegion: content.page.regions['main'],
            sitePath: site['_path'],
            currentPath: content._path,
            pageTitle: getPageTitle(),
            metaDescription: getMetaDescription(),
            menuItems: libs.menu.getMenuTree(3).menuItems,
            siteName: site.displayName,
            isEditMode,
            csp
        }
    }

    function getPageTitle() {
        return content['displayName'] + ' - ' + site['displayName'];
    }

    function getMetaDescription() {
        const htmlMeta = getExtradata(content, 'html-meta');
        return htmlMeta.htmlMetaDescription || '';
    }

    function getExtradata(content, property) {
        const appNamePropertyName = app.name.replace(/\./g,'-');
        // Short way of getting nested objects
        // http://blog.osteele.com/posts/2007/12/cheap-monads/
        return ((content.x || {})[appNamePropertyName] || {})[property] || {};
    }

    const response = {
        body: libs.thymeleaf.render(view, model)
    };

    if (!isEditMode) {
        response.headers = {
            'Content-Security-Policy': csp
        };
    }

    return response;
}
