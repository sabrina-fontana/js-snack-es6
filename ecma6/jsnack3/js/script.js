// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

// ECMA5
// var arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log('arrayNum è composto da: ' + arrayNum);
//
// function myFunction(array, A, B) {
//   var newArray = [];
//   for (var x = 0; x < array.length; x++) {
//     if (x >= A && x <= B) {
//       newArray.push(array[x]);
//     }
//   }
//   return newArray;
// };
//
// console.log('I numeri che hanno index compreso tra 3 e 8 di arrayNum sono: ' + myFunction(arrayNum, 3, 8));

// ECMA6
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('arrayNum è composto da: ' + arrayNum);

let myFunction = (array, A, B) => { //dove A e B rappresentano l'index
  let newArray = array.filter((element, index, array) => {
    return (A <= index && index <= B)
  });
  return newArray;
}

console.log('I numeri che hanno index compreso tra 3 e 8 di arrayNum sono: ' + myFunction(arrayNum, 3, 8));
