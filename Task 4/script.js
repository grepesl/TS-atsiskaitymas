"use strict";
function textToNumber(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += i % 2 === 0 ? "1" : "0";
    }
    return parseInt(result, 10);
}
console.log(textToNumber("labas"));
console.log(textToNumber("kebabas"));
console.log(textToNumber("a"));
console.log(textToNumber("abcde"));
