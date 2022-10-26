# SnowflakeId

A lightweight module to generate time based 64-bit unique ids, inspired by Twitter id (snowflake).

---

## Installation

NodeJS

```js
npm install @pharastar/snowflakeid
```

---

### Usage

Initializtion

```js
const SnowflakeId = require('@pharastar/snowflakeid'); /* on node js only */

//initiate flake
const snowflake = new SnowflakeId({
    mid: 420, // optional, define machine id
    timeOffset: (2022 - 1970) * 31536000 * 1000 // optional, define a offset time
});
```

Create a instance of snowflake as shown above which will be used to generate snowflake ids afterward.

Id generation

```js
const id1 = snowflake.gen(); // returns something like 112867124767768576
const id2 = snowflake.gen(); // returns something like 112867124784545792
```

#### Options

mid: (Defaults to 1) A machine id or any random id. If you are generating id in distributed system, its highly advised to provide a proper mid which is unique to different machines.

timeOffset: (Defaults to 0) Time offset will be subtracted from current time to get the first 42 bit of id. This help in generating smaller ids.
