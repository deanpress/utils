import { isString } from "./is-string";
import { isSymbol } from "./is-symbol";
import { map } from "./map";

export const toString = <T>(value: T): string | undefined => {
    if (value === null || value === undefined) {
        return "";
    }

    if (isString(value)) {
        return value;
    }

    if (isSymbol(value)) {
        return value.toString();
    }

    if (Array.isArray(value)) {
        return `${map(value, other => (other === null ? other : toString(other)))}`;
    }

    return `${value}`;
};