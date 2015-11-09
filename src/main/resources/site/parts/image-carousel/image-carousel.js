var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var UTIL = require('/lib/enonic/util/util');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('image-carousel.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {
        var model = {};

        model.images = getImages();

        return model;
    }

    /**
     * Get images that exist and that we have permission to read
     * @returns {Array}
     */
    function getImages() {
        var images = [];
        var component = portal.getComponent();
        var componentImages = component.config.image;

        // Loop through all selected/configured images
        for (var i=0;i<componentImages.length;i++) {
            if (UTIL.content.exists(componentImages[i])) {
                images.push(componentImages[i]);
            }
        }
        return images;
    }

    return {
        body: thymeleaf.render(view, model)
    };
}