"use strict";
const array = [1, 2, 3, 4, 5];
; //primeira forma de declarar um array
const array2 = ["1", "2", "3", "4", "5"]; //segunda forma de declarar um array
const array3 = ["jesse", "jessica", "jose", "joao"]; //terceira forma de declarar um array
console.log(array.length); // 5
// array.push(6); // adiciona um elemento no final do array
console.log(array.length); // [1, 2, 3, 4, 5, 6]
//bucando um elemento no array
const busca = array.find(elemento => elemento > 2);
// console.log(busca); // 3
array.map(num => {
    if (num % 2 === 1) {
        console.log(num);
    }
});
