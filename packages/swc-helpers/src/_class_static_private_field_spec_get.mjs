import _class_apply_descriptor_get from "./_class_apply_descriptor_get.mjs";
import _class_check_private_static_access from "./_class_check_private_static_access.mjs";
import _class_check_private_static_field_descriptor from "./_class_check_private_static_field_descriptor.mjs";
export default function _class_static_private_field_spec_get(receiver, classConstructor, descriptor) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
