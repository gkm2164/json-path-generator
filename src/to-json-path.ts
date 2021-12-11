import * as _ from "lodash/fp";

const cast = <T>(v: any): T => v as T;

export const toJsonPath = <T>(obj: T, prefix: string = "$"): T => {
    if (_.isArray(obj) && !_.isEmpty(obj)) {
        return cast(
            obj.map((v, idx) => toJsonPath(v, `${prefix}[${idx}]`))
        )
    }

    if (_.isObject(obj) && !_.isEmpty(obj)) {
        return cast(
            Object.entries(obj).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: key === "$" ? prefix : toJsonPath(value, `${prefix}.${key}`)
            }), {})
        )
    }

    if (_.isString(obj)) {
        return cast(prefix);
    }

    throw new Error("should be one of either: string or non empty object/array");
}