System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia + SB Admin 2";
            config.map([{ route: ["", "dashboard"], moduleId: "dashboard", nav: true, title: "Dashboard", faIcon: "fa-dashboard" }, { route: ["charts"], nav: true, title: "Charts", faIcon: "fa-bar-chart-o" }, { route: ["charts/flot"], nav: true, title: "Flot charts", child: true }, { route: ["charts/morris"], nav: true, title: "Morris charts", child: true }, { route: ["tables"], nav: true, title: "Tables", faIcon: "fa-table" }, { route: ["forms"], nav: true, title: "Forms", faIcon: "fa-edit" }, { route: ["ui-elements"], nav: true, title: "UI Elements", faIcon: "fa-wrench" }, { route: ["ui-elements/panels-wells"], nav: true, title: "Panels and Wells", child: true }, { route: ["ui-elements/buttons"], nav: true, title: "Buttons", child: true }, { route: ["ui-elements/notifications"], nav: true, title: "Notifications", child: true }, { route: ["ui-elements/typography"], nav: true, title: "Typography", child: true }, { route: ["ui-elements/icons"], nav: true, title: "Icons", child: true }, { route: ["ui-elements/grid"], nav: true, title: "Grid", child: true }, { route: ["multi-level-dropdown"], nav: true, title: "Multi-Level Dropdown", faIcon: "fa-sitemap" }, { route: ["multi-level-dropdown/second-level-1"], moduleId: "empty", nav: true, title: "Second Level Item", child: true }, { route: ["multi-level-dropdown/second-level-2"], moduleId: "empty", nav: true, title: "Second Level Item", child: true }, { route: ["multi-level-dropdown"], moduleId: "empty", nav: true, title: "Grid", child: true }, { route: ["multi-level-dropdown"], moduleId: "empty", nav: true, title: "Grid", child: true }, { route: ["multi-level-dropdown"], moduleId: "empty", nav: true, title: "Grid", child: true }, { route: ["sample-pages"], nav: true, title: "Sample Pages", faIcon: "fa-files-o" }, { route: ["sample-pages/blank-page"], nav: true, title: "Blank Page", child: true }, { route: ["sample-pages/login-page"], nav: true, title: "Login Page", child: true }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function attached() {
              $(window).bind("resize", this.adjustContainers);

              this.adjustContainers();
            },
            writable: true,
            configurable: true
          },
          adjustContainers: {
            value: function adjustContainers() {
              var topOffset = 30;
              var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
              if (width < 768) {
                $("div.navbar-collapse").addClass("collapse");
                topOffset = 100;
              } else {
                $("div.navbar-collapse").removeClass("collapse");
              }

              var height = (window.innerHeight > 0 ? window.innerHeight : screen.height) - 1;
              height = height - topOffset;
              if (height < 1) height = 1;
              if (height > topOffset) {
                $("#page-wrapper").css("min-height", height + "px");
                $(".navbar-default.sidebar").css("min-height", height - 20 + "px");
              }
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUNsRixDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7NkJBL0JVLEdBQUc7QUFDUCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFnQ3BDLGtCQUFRO21CQUFBLG9CQUFFO0FBQ1IsZUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0FBRWhELGtCQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6Qjs7OztBQUVELDBCQUFnQjttQkFBQSw0QkFBRTtBQUNoQixrQkFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGtCQUFJLEtBQUssR0FBRyxBQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN2RSxrQkFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO0FBQ2YsaUJBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5Qyx5QkFBUyxHQUFHLEdBQUcsQ0FBQztlQUNqQixNQUFNO0FBQ0wsaUJBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztlQUNsRDs7QUFFRCxrQkFBSSxNQUFNLEdBQUcsQ0FBQyxBQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQSxHQUFJLENBQUMsQ0FBQztBQUNqRixvQkFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDNUIsa0JBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLGtCQUFJLE1BQU0sR0FBRyxTQUFTLEVBQUU7QUFDdEIsaUJBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEFBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxDQUFDO0FBQ3RELGlCQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEFBQUMsTUFBTSxHQUFHLEVBQUUsR0FBSSxJQUFJLENBQUMsQ0FBQztlQUN0RTthQUNGOzs7Ozs7ZUF4RFUsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==