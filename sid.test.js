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
