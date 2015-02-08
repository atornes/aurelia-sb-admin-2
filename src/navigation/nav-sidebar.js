import {Behavior} from 'aurelia-framework';

export class NavSidebar {
  static metadata(){
    return Behavior
      .customElement('nav-sidebar')
      .withProperty('router');
  }

  buildLevels(navigation) {
    let level1 = [];

    let previous;
    for (var key in navigation) {
      if (navigation.hasOwnProperty(key)) {

        var row = navigation[key];

        row.isActiveClass = this.isActiveClass;

        if (row.config.child) {
          if (previous) {
            row.parent = previous.config.route;
            previous.children = previous.children || [];
            previous.children.push(row);
          }
        }
        else {
          level1.push(row);
          previous = row;
        }
      }
    }

    return level1;
  }
}
