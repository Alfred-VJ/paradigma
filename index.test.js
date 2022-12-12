const { valles } = require('./index')

describe('Debes retornar el número de valles que cruzo el usuario', () => {
    test('Para los pasos "DDUUDDSSUU" deberías retornar ==> 2', () => {
        expect(valles("DDUUDDSSUU")).toBe(2);
    });

    test('Para los pasos "UDUUDDU" deberías retornar ==> 0', () => {
        expect(valles("UDUUDDU")).toBe(0);
    });

    test('Para los pasos "SSSDUUUUDUU" deberías retornar ==> 1', () => {
        expect(valles("SSSDUUUUDUU")).toBe(2);
    });

    test('Para los pasos "DDDDUUUSS" deberías retornar ==> 0', () => {
        expect(valles("DDDDUUSS")).toBe(0);
    });

    test('Para los pasos "DDDDUDUUDUUDUUDUDU" deberías retornar ==> 3', () => {
        expect(valles("DDDDUDUUDUUDUUDUDU")).toBe(3);
    });
});