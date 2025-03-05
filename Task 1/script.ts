/* ------------------------------ TASK 1 -----------------------------------
Priskirkite tipus VISIEMS pateiktiems kintamiesiems, kad kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.
-------------------------------------------------------------------------- */

const one: number = 654;
const two: boolean = true;
const three: boolean = true;
let four: boolean | string = true;
four = '123';
let five: number[] = [1,2,3];
five = [21,22,23,24];
// five = ['a', 'b']; // error
// five = [true, true, false]; // error
let six: number[] | string[] = [1,2,3,4];
six = ['a','b','c','d'];
// six = ['a',2,3,'d']; // error
// six = [true, false]; // error
let seven: (string | number)[] = [1,2,3,4];
seven = ['a','b','c','d'];
seven = ['a',2,3,'d'];
// seven = [true, false]; // error
let eight: [string, number] = ['hi', 1];
eight = ['bye', 2];
// eight = [1,2]; // error
// eight = ['a','b','c']; // error