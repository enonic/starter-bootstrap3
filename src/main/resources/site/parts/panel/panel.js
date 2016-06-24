var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/xp/thymeleaf')
};

exports.get = handleGet;

function handleGet(req) {
    var view = resolve('panel.html');
    var component = libs.portal.getComponent();
    var config = component.config;

    var model = createModel();

    function createModel() {
        var model = {};

        model.theme = config.theme || 'default';
        model.heading = config.heading;
        model.body = libs.portal.processHtml({value: config.body});

        return model;
    }

    return {
        body: libs.thymeleaf.render(view, model)
    };
}
