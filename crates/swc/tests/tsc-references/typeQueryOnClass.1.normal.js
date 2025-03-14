//// [typeQueryOnClass.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
var C = /*#__PURE__*/ function() {
    "use strict";
    function C(x) {
        var _this = this;
        _class_call_check(this, C);
        this.x = x;
        this.ia = 1;
        this.ib = function() {
            return _this.ia;
        };
    }
    var _proto = C.prototype;
    _proto.baz = function baz(x) {
        return "";
    };
    C.foo = function foo(x) {};
    C.bar = function bar(x) {};
    _create_class(C, [
        {
            key: "ic",
            get: function get() {
                return 1;
            },
            set: function set(x) {}
        },
        {
            key: "id",
            get: function get() {
                return 1;
            }
        }
    ], [
        {
            key: "sc",
            get: function get() {
                return 1;
            },
            set: function set(x) {}
        },
        {
            key: "sd",
            get: function get() {
                return 1;
            }
        }
    ]);
    return C;
}();
(function() {
    C.sa = 1;
})();
(function() {
    C.sb = function() {
        return 1;
    };
})();
var c;
// BUG 820454
var r1;
var r2;
var D = /*#__PURE__*/ function() {
    "use strict";
    function D(y) {
        _class_call_check(this, D);
        this.y = y;
    }
    var _proto = D.prototype;
    _proto.foo = function foo() {};
    return D;
}();
var d;
var r3;
var r4;
