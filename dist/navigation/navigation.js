System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Navigation;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Navigation = _export("Navigation", (function () {
        function Navigation() {
          _classCallCheck(this, Navigation);
        }

        _prototypeProperties(Navigation, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("title").withProperty("href").withProperty("router");
            },
            writable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function attached() {
              $("#side-menu").metisMenu();

              this.focusFromRoute();
            },
            writable: true,
            configurable: true
          },
          focusFromRoute: {
            value: function focusFromRoute() {
              var _this = this;
              setTimeout(function () {
                var sidebar = $(".sidebar-nav");
                var navModel = _this.router.currentInstruction.config.navModel;
                var currentHref = navModel.href;

                var anchor = sidebar.find("a[href=\"" + currentHref + "\"]");
                anchor.parents("ul.nav.collapse").addClass("in").attr("aria-expanded", "true");

                anchor.focus();
              }, 100);
            },
            writable: true,
            configurable: true
          }
        });

        return Navigation;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILFVBQVU7OztBQUZmLGNBQVEscUJBQVIsUUFBUTs7Ozs7OztBQUVILGdCQUFVO2lCQUFWLFVBQVU7Z0NBQVYsVUFBVTs7OzZCQUFWLFVBQVU7QUFDZCxrQkFBUTttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDWixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzNCOzs7OztBQUVELGtCQUFRO21CQUFBLG9CQUFHO0FBQ1QsZUFBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDOztBQUU1QixrQkFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCOzs7O0FBRUQsd0JBQWM7bUJBQUEsMEJBQUU7O0FBQ2Qsd0JBQVUsQ0FBQyxZQUFNO0FBQ2Ysb0JBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNoQyxvQkFBSSxRQUFRLEdBQUcsTUFBSyxNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUM5RCxvQkFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQzs7QUFFaEMsb0JBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVSxHQUFHLFdBQVcsR0FBRyxLQUFJLENBQUMsQ0FBQztBQUMzRCxzQkFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLENBQ2QsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQzs7QUFFakMsc0JBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztlQUNoQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7Ozs7OztlQTNCVSxVQUFVIiwiZmlsZSI6Im5hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9