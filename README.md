# Bootstrap 3 Starter

The purpose of this starter kit is to act as a kick start for app development on Enonic eXperience Platform. This starter kit contains the popular [Bootstrap](http://getbootstrap.com/) HTML, CSS and JS framework, and a few usage examples based on Bootstrap's official examples.
We have also added an example article content-type and templates for listing and showing article contents.

Feel free to use and modify this starter kit as you wish.

## Installation

To initialize your own app based on this starter kit, run the following command (for more info on project initialisation, read [the documentation for init-project](http://xp.readthedocs.org/en/stable/reference/toolbox/init-project.html))

### OSX/Linux
```shell
$ toolbox.sh init-project -n com.company.myapp -r starter-bootstrap3
```

### Windows
```shell
$ toolbox.bat init-project -n com.company.myapp -r starter-bootstrap3
```

## Compatibility

| Version        | XP version |
| ------------- | ------------- |
| 1.0.0 | 6.4.0 - 6.11.x |
| 1.1.0 | 6.4.0 - |
| 1.2.0 | 6.12.0+ |

## WebJars

The Bootstrap framework files are added as [WebJar](http://www.webjars.org/) dependency in build.gradle, and will be downloaded the first time you build the app. They are automatically put in the /build/resources/main/site/assets folder. If you want another version of Bootstrap, just update the version number (make sure that it is listed on the WebJar site. If you would rather like to handle this manually, just remove this WebJar dependency in build.gradle. Bootstrap files can then be manually added to /src/main/resources/site/assets.

```
webjar "org.webjars:bootstrap:3.3.6"
```

## Demo content

This starter kit is bundled with some demo content that will be installed when the app is installed. If you do not want this, simply delete the /src/main/java/com/enonic/xp/demo/initializer and /src/main/resources/import folders.
If you have already initialized the content, you can remove it by deleting the $XP_HOME/repo folder and restart the app/server.

## Grid layouts

The Bootstrap grid system can be used statically both in parts and pages, and is also available as drag and drop layouts for building pages dynamically in the live edit view.
The starter kit contains two, three and four column layouts, which contain a range of different column width configurations. For example, a two column layout with the 75-25 (percentage) configuration, will output two columns with a .col-md-9 and a .col-md-3 class. Each column in a layout contains a region where you can add parts.

## Copyright and license

This software is licensed under MIT license.
Bootstrap Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE).
