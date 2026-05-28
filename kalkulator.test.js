import { tambah } from "./kalkulator.js";

test("1 + 2 harus sama dengan 3", () => {
    expect(tambah(1, 2)).toBe(3);
});
