//// [0.ts]
define([
    "require",
    "exports"
], function(require, exports) {
    "use strict";
    function foo() {
        return "foo";
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), Object.defineProperty(exports, "foo", {
        enumerable: !0,
        get: ()=>foo
    });
});
//// [1.ts]
define([
    "require",
    "exports",
    "@swc/helpers/src/_interop_require_wildcard.mjs"
], function(require, exports, _interop_require_wildcard) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), Object.defineProperty(exports, "p2", {
        enumerable: !0,
        get: ()=>p2
    }), _interop_require_wildcard = _interop_require_wildcard.default, new Promise((resolve, reject)=>require([
            "./0"
        ], (m)=>resolve(_interop_require_wildcard(m)), reject)), new Promise((resolve, reject)=>require([
            "./0"
        ], (m)=>resolve(_interop_require_wildcard(m)), reject)).then((zero)=>zero.foo());
    var p2 = new Promise((resolve, reject)=>require([
            "./0"
        ], (m)=>resolve(_interop_require_wildcard(m)), reject));
});
