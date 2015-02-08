System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, NavSidebar;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavSidebar = _export("NavSidebar", (function () {
        function NavSidebar() {
          _classCallCheck(this, NavSidebar);
        }

        _prototypeProperties(NavSidebar, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("nav-sidebar").withProperty("router");
            },
            writable: true,
            configurable: true
          }
        }, {
          buildLevels: {
            value: function buildLevels(navigation) {
              var level1 = [];

              var previous = undefined;
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
                  } else {
                    level1.push(row);
                    previous = row;
                  }
                }
              }

              return level1;
            },
            writable: true,
            configurable: true
          }
        });

        return NavSidebar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vbmF2LXNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxVQUFVOzs7QUFGZixjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxnQkFBVTtpQkFBVixVQUFVO2dDQUFWLFVBQVU7Ozs2QkFBVixVQUFVO0FBQ2Qsa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ1osYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUM1QixZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDM0I7Ozs7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsVUFBVSxFQUFFO0FBQ3RCLGtCQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWhCLGtCQUFJLFFBQVEsWUFBQSxDQUFDO0FBQ2IsbUJBQUssSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFO0FBQzFCLG9CQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFFbEMsc0JBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFMUIscUJBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7QUFFdkMsc0JBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDcEIsd0JBQUksUUFBUSxFQUFFO0FBQ1oseUJBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDbkMsOEJBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7QUFDNUMsOEJBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUM3QjttQkFDRixNQUNJO0FBQ0gsMEJBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsNEJBQVEsR0FBRyxHQUFHLENBQUM7bUJBQ2hCO2lCQUNGO2VBQ0Y7O0FBRUQscUJBQU8sTUFBTSxDQUFDO2FBQ2Y7Ozs7OztlQWpDVSxVQUFVIiwiZmlsZSI6Im5hdmlnYXRpb24vbmF2LXNpZGViYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==