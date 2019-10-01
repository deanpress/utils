import "jest-extended";

import { assign } from "../src";

function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

describe("#assign", () => {
    it("should return the names of the users", () => {
        expect(assign({ a: 0 }, new Foo(), new Bar())).toEqual({ a: 1, c: 3 });
    });
});