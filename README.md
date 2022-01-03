# Bootstrap Starter

The purpose of this starter kit is to act as a kick start for app development on Enonic XP Platform. This starter kit contains the popular [Bootstrap](http://getbootstrap.com/) HTML, CSS and JS framework, and a few usage examples based on Bootstrap's official examples.
We have also added an example article content-type and templates for listing and showing article contents.

Feel free to use and modify this starter kit as you wish.

## Installation

To setup a project locally with Enonic CLI, simply run the following command:

```bash
$ enonic project create
```
Complete the Wizard and make sure you choose *Webpack starter* from the list of starters

```bash
$ cd <project-folder>
```

To build and deploy the project:

```bash
$ enonic project deploy
```

NOTE: *Don't have the Enonic CLI?* Visit the https://developer.enonic.com/start[Getting started guide] to install it.

## Compatibility

| Version        | XP version |
| ------------- | ------------- |
| 1.0.0 | 6.4.0 - 6.11.x |
| 1.1.0 | 6.4.0 - |
| 1.2.0 | 6.12.0+ |
| 1.3.0 | 6.12.0+ |
| 2.0.0 | 7.0.0 |
| 2.1.0 | 7.3.1 |
| 2.2.0 | 7.6.0 |
| 2.3.0 | 7.8.0 |

## WebJars

The Bootstrap framework files are added as [WebJar](http://www.webjars.org/) dependency in build.gradle, and will be downloaded the first time you build the app. They are automatically put in the /build/resources/main/site/assets folder. If you want another version of Bootstrap, just update the version number (make sure that it is listed on the WebJar site. If you would rather like to handle this manually, just remove this WebJar dependency in build.gradle. Bootstrap files can then be manually added to /src/main/resources/site/assets.

```
webjar "org.webjars:bootstrap:4.6.0"
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
