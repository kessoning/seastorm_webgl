const PI = 3.14159265358;
const TWO_PI = PI * 2;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;

// "Stolen" from P5.js
// https://github.com/processing/p5.js/blob/0.10.2/src/math/calculation.js#L273
const lerp = function (start, stop, amt) {
    return amt * (stop - start) + start;
};

export {
    PI,
    TWO_PI,
    HALF_PI,
    QUARTER_PI,
    lerp
};