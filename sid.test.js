/**
 * Copyright (c) 2022 | LuciferMorningstarDev <contact@lucifer-morningstar.dev>
 * Copyright (C) 2022 | Pharaoh & Morningstar LLC team and contributors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import SnowflakeId from './sid';
let snowflake;

test('instantiate snowflakeId', () => {
    snowflake = new SnowflakeId({
        mid: 420,
        timeOffset: (2022 - 1970) * 31536000 * 1000
    });

    expect(snowflake).not.toBe(null);
});

const flakes = [];
const length = 1000;

test('snowflake generation', () => {
    for (let i = 0; i < length; i++) flakes.push(snowflake.gen());
    console.log(flakes);
    expect(flakes.length).toBe(length);
});

test('snowflake unique', () => {
    let tmp = [];

    for (let flake of flakes) {
        if (!tmp.includes(flake)) tmp.push(flake);
    }

    expect(tmp.length).toBe(length);
});
