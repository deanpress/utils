import "jest-extended";

import { isWeakSet } from "../src";

describe("#isWeakSet", () => {
    it("should pass", () => {
        expect(isWeakSet(new WeakSet())).toBeTrue();
    });

    it("should fail", () => {
        expect(isWeakSet(1)).toBeFalse();
    });
});
