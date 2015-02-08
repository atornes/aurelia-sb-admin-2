import {Behavior} from 'aurelia-framework';

export class Navigation {
  static metadata(){
    return Behavior
      .withProperty('title')
      .withProperty('href')
      .withProperty('router');
  }

  attached() {
    $('#side-menu').metisMenu();

    this.focusFromRoute();
  }

  focusFromRoute(){
    setTimeout(() => {
      let sidebar = $('.sidebar-nav');
      let navModel = this.router.currentInstruction.config.navModel;
      let currentHref = navModel.href;

      let anchor = sidebar.find('a[href="' + currentHref + '"]');
      anchor.parents('ul.nav.collapse')
        .addClass('in')
        .attr('aria-expanded', 'true');

      anchor.focus();
    }, 100);
  }
}
