import { isNil, keys, omit } from "lodash";

export function removeNullValuesFromObj(obj: any): any {
    if (keys(obj).length === 0) {
        return {};
    }
    for (const key in obj) {
        if (isNil(obj[key]) || obj[key] === '') {
            obj = omit(obj, key);
        }
    }

    return obj
}