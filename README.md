# Bootstrap starter kit

The purpose of this starter kit is to act as a kick start for app development on Enonic eXperience Platform. This starter kit contains the popular [Bootstrap](http://getbootstrap.com/) HTML, CSS and JS framework, and a few usage examples based on Bootstrap's official examples.
We have also added an example article content-type and templates for listing and showing article contents.

Feel free to use and modify this starter kit as you wish.

## Installation

To initialize your own app based on this starter kit, run the following command (for more info on project initialisation, read [the documentation for init-project](http://xp.readthedocs.org/en/stable/reference/toolbox/init-project.html))

```shell
$ toolbox.sh init-project -n com.company.myapp -r starter-bootstrap
```

## Compatibility

| Version        | XP version |
| ------------- | ------------- |
| 1.0.0 | 6.2.0 |

## Grid layouts

The Bootstrap grid system can be used statically both in parts and pages, and is also available as drag and drop layouts for building pages dynamically in the live edit view.
The starter kit contains two, three and four column layouts, which contain a range of different column width configurations. For example, a two column layout with the 75-25 (percentage) configuration, will output two columns with a .col-md-9 and a .col-md-3 class. Each column in a layout contains a region where you can add parts.