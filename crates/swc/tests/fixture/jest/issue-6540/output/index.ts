"use strict";
jest.mock("./foo").mock("./bar");
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _interop_require_default = require("@swc/helpers/lib/_interop_require_default.js").default;
const _foo = /*#__PURE__*/ _interop_require_default(require("./foo"));
test("Foo is a mock", ()=>{
    expect(jest.isMockFunction(_foo.default)).toBe(true);
});
