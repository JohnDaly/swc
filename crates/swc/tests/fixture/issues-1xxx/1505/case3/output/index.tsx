import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _define_property from "@swc/helpers/src/_define_property.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Component = function Component() {
    "use strict";
    _class_call_check(this, Component);
};
var ComponentType = function ComponentType() {
    "use strict";
    _class_call_check(this, ComponentType);
};
var withTeamsForUser = function(_WrappedComponent) {
    var _class = /*#__PURE__*/ function(Component) {
        "use strict";
        _inherits(_class, Component);
        var _super = _create_super(_class);
        function _class() {
            _class_call_check(this, _class);
            return _super.apply(this, arguments);
        }
        return _class;
    }(Component);
    _define_property(_class, "displayName", "x");
    return _class;
};
