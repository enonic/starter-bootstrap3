var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/thymeleaf'),
    util: require('/lib/util')
};

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('image-carousel.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {
        var model = {};

        var images = getImages();
        if (images.length) {
            model.images = images;
        }

        return model;
    }

    /**
     * Get images that exist and that we have permission to read
     * @returns {Array}
     */
    function getImages() {
        var images = [];
        var component = libs.portal.getComponent();
        var componentImages = component.config.image;

        // Loop through all selected/configured images
        if (componentImages) {
            for (var i=0;i<componentImages.length;i++) {
                if (libs.util.content.exists(componentImages[i])) {
                    images.push(componentImages[i]);
                }
            }
        }

        return images;
    }

    return {
        body: libs.thymeleaf.render(view, model)
    };
}