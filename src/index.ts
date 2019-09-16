import fast from "fast.js";

// Internal
export * from "./at";
export * from "./capitalize";
export * from "./capped-set";
export * from "./chunk";
export * from "./clone-deep";
export * from "./collection";
export * from "./flatten";
export * from "./get";
export * from "./group-by";
export * from "./has-property";
export * from "./has-some-property";
export * from "./has";
export * from "./head";
export * from "./is-array-of-type";
export * from "./is-boolean-array";
export * from "./is-constructor";
export * from "./is-empty";
export * from "./is-equal";
export * from "./is-function";
export * from "./is-nil";
export * from "./is-number-array";
export * from "./is-object";
export * from "./is-string-array";
export * from "./is-string";
export * from "./is-symbol";
export * from "./is-undefined";
export * from "./last";
export * from "./max";
export * from "./min-by";
export * from "./min";
export * from "./nsect";
export * from "./order-by";
export * from "./ordered-capped-map";
export * from "./partition";
export * from "./pick";
export * from "./sample";
export * from "./set";
export * from "./shuffle";
export * from "./sort-by-desc";
export * from "./sort-by";
export * from "./stringify";
export * from "./tail";
export * from "./take";
export * from "./uncapitalize";
export * from "./uniq";
export * from "./unset";

// fast.js
export const assign = fast.assign;
export const tryCatch = fast.try;
export const concat = fast.concat;
export const fill = fast.fill;
export const filter = fast.filter;
export const forEach = fast.forEach;
export const indexOf = fast.indexOf;
export const intern = fast.intern;
export const map = fast.map;
export const reduce = fast.reduce;
export const some = fast.some;
