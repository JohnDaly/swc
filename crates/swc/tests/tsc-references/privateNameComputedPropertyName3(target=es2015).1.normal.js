//// [privateNameComputedPropertyName3.ts]
import _class_private_field_get from "@swc/helpers/src/_class_private_field_get.mjs";
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
import _class_private_field_set from "@swc/helpers/src/_class_private_field_set.mjs";
var _name = /*#__PURE__*/ new WeakMap();
class Foo {
    getValue(x) {
        const obj = this;
        var _y = /*#__PURE__*/ new WeakMap();
        let _class_private_field_get1 = _class_private_field_get(obj, _name);
        class Bar {
            [_class_private_field_get1]() {
                return x + _class_private_field_get(this, _y);
            }
            constructor(){
                _class_private_field_init(this, _y, {
                    writable: true,
                    value: void 0
                });
                _class_private_field_set(this, _y, 100);
            }
        }
        return new Bar()[_class_private_field_get(obj, _name)]();
    }
    constructor(name){
        _class_private_field_init(this, _name, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _name, name);
    }
}
console.log(new Foo("NAME").getValue(100));
