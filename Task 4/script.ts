/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */

function textToNumber(text: string): number {
  let result = "";
  
  for (let i = 0; i < text.length; i++) {
    result += i % 2 === 0 ? "1" : "0";
  }
  
  return parseInt(result, 10); 
}

console.log(textToNumber("labas"));   // 10101
console.log(textToNumber("kebabas")); // 1010101
console.log(textToNumber("a"));       // 1
console.log(textToNumber("abcde"));   // 10101
