const { tambah } = require("./kalkulator");

test("1 + 2 harus sama dengan 3", () => {
    expect(tambah(1, 2)).toBe(3);
});

test("2 + 2 harus sama dengan 4", () => {
    expect(tambah(2, 2)).toBe(4);
});
