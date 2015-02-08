import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia + SB Admin 2';
      config.map([
        {route: ['','dashboard'], moduleId: 'dashboard', nav: true, title:'Dashboard', faIcon:'fa-dashboard'},
        {route: ['charts'], nav: true, title:'Charts', faIcon:'fa-bar-chart-o'},
        {route: ['charts/flot'], nav: true, title: 'Flot charts', child: true},
        {route: ['charts/morris'], nav: true, title: 'Morris charts', child: true},
        {route: ['tables'], nav: true, title:'Tables', faIcon:'fa-table'},
        {route: ['forms'], nav: true, title:'Forms', faIcon:'fa-edit'},
        {route: ['ui-elements'], nav: true, title:'UI Elements', faIcon:'fa-wrench'},
        {route: ['ui-elements/panels-wells'], nav: true, title: 'Panels and Wells', child: true},
        {route: ['ui-elements/buttons'], nav: true, title: 'Buttons', child: true},
        {route: ['ui-elements/notifications'], nav: true, title: 'Notifications', child: true},
        {route: ['ui-elements/typography'], nav: true, title: 'Typography', child: true},
        {route: ['ui-elements/icons'], nav: true, title: 'Icons', child: true},
        {route: ['ui-elements/grid'], nav: true, title: 'Grid', child: true},
        {route: ['multi-level-dropdown'], nav: true, title:'Multi-Level Dropdown', faIcon:'fa-sitemap'},
        {route: ['multi-level-dropdown/second-level-1'], moduleId: 'empty', nav: true, title: 'Second Level Item', child: true},
        {route: ['multi-level-dropdown/second-level-2'], moduleId: 'empty', nav: true, title: 'Second Level Item', child: true},
        {route: ['multi-level-dropdown'], moduleId: 'empty', nav: true, title: 'Grid', child: true},
        {route: ['multi-level-dropdown'], moduleId: 'empty', nav: true, title: 'Grid', child: true},
        {route: ['multi-level-dropdown'], moduleId: 'empty', nav: true, title: 'Grid', child: true},
        {route: ['sample-pages'], nav: true, title:'Sample Pages', faIcon:'fa-files-o'},
        {route: ['sample-pages/blank-page'], nav: true, title: 'Blank Page', child: true},
        {route: ['sample-pages/login-page'], nav: true, title: 'Login Page', child: true}
      ]);
    });
  }

  attached(){
    $(window).bind("resize", this.adjustContainers);

    this.adjustContainers();
  }

  adjustContainers(){
    let topOffset = 30;
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 768) {
      $('div.navbar-collapse').addClass('collapse');
      topOffset = 100; // 2-row-menu
    } else {
      $('div.navbar-collapse').removeClass('collapse');
    }

    let height = ((window.innerHeight > 0) ? window.innerHeight : screen.height) - 1;
    height = height - topOffset;
    if (height < 1) height = 1;
    if (height > topOffset) {
      $("#page-wrapper").css("min-height", (height) + "px");
      $('.navbar-default.sidebar').css("min-height", (height - 20) + "px");
    }
  }
}
