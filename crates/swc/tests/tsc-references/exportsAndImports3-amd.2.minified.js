//// [exportsAndImports3-amd.ts]
define([
    "require"
], function(require) {});
//// [t1.ts]
define([
    "require",
    "exports",
    "@swc/helpers/src/_class_call_check.mjs"
], function(require, exports, _class_call_check) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: !0,
            get: all[name]
        });
    }(exports, {
        E: function() {
            return E1;
        },
        D: function() {
            return D1;
        },
        M: function() {
            return M;
        },
        v: function() {
            return v;
        },
        f: function() {
            return f;
        },
        C: function() {
            return C;
        },
        a: function() {
            return a;
        },
        v1: function() {
            return v;
        },
        f1: function() {
            return f;
        },
        C1: function() {
            return C;
        },
        E1: function() {
            return E1;
        },
        D1: function() {
            return D1;
        },
        M1: function() {
            return M;
        },
        a1: function() {
            return a;
        }
    }), _class_call_check = _class_call_check.default;
    var E, D, x, E1, D1, M, v = 1;
    function f() {}
    var C = function C() {
        "use strict";
        _class_call_check(this, C);
    };
    (E = E1 || (E1 = {}))[E.A = 0] = "A", E[E.B = 1] = "B", E[E.C = 2] = "C", (D = D1 || (D1 = {}))[D.A = 0] = "A", D[D.B = 1] = "B", D[D.C = 2] = "C", (M || (M = {})).x = x;
    var a = M.x;
});
//// [t2.ts]
define([
    "require",
    "exports",
    "./t1"
], function(require, exports, _t1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: !0,
            get: all[name]
        });
    }(exports, {
        v: function() {
            return _t1.v1;
        },
        f: function() {
            return _t1.f1;
        },
        C: function() {
            return _t1.C1;
        },
        I: function() {
            return _t1.I1;
        },
        E: function() {
            return _t1.E1;
        },
        D: function() {
            return _t1.D1;
        },
        M: function() {
            return _t1.M1;
        },
        N: function() {
            return _t1.N1;
        },
        T: function() {
            return _t1.T1;
        },
        a: function() {
            return _t1.a1;
        }
    });
});
//// [t3.ts]
define([
    "require",
    "exports",
    "./t1"
], function(require, exports, _t1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), function(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: !0,
            get: all[name]
        });
    }(exports, {
        v: function() {
            return _t1.v1;
        },
        f: function() {
            return _t1.f1;
        },
        C: function() {
            return _t1.C1;
        },
        I: function() {
            return _t1.I1;
        },
        E: function() {
            return _t1.E1;
        },
        D: function() {
            return _t1.D1;
        },
        M: function() {
            return _t1.M1;
        },
        N: function() {
            return _t1.N1;
        },
        T: function() {
            return _t1.T1;
        },
        a: function() {
            return _t1.a1;
        }
    });
});
