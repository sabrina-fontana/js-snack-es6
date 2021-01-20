// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

// ECMA5
// var arrayNomi = ['qui', 'quo', 'qua', 'pippo', 'pluto', 'paperino'];
// console.log('arrayNomi è composto da: ' + arrayNomi);
//
// var posizioneMin = parseInt(prompt('Inserisci il numero min'));
// var posizioneMax = parseInt(prompt('Inserisci il numero max (non superiore a 6)'));
//
// function myFunction(array, min, max) { //dove min e max rappresentano la posizione umana nell'array (+1 rispetto all'index)
//   var newArray = [];
//   for (var x = 0; x < array.length; x++) {
//     if ((x + 1) >= min && (x + 1) <= max) {
//       newArray.push(array[x]);
//     }
//   }
//   return newArray;
// };
//
// console.log('I nomi che hanno posizione compresa tra ' + posizioneMin + ' e ' + posizioneMax + ' di arrayNomi sono: ' + myFunction(arrayNomi, posizioneMin, posizioneMax));
//
// ECMA6
const arrayNomi = ['qui', 'quo', 'qua', 'pippo', 'pluto', 'paperino'];
console.log('arrayNomi è composto da: ' + arrayNomi);

let posizioneMin = parseInt(prompt('Inserisci il numero min'));
let posizioneMax = parseInt(prompt('Inserisci il numero max (non superiore a 6'));

let myFunction = (array, min, max) => {
  let newArray = array.filter((element, index, array) => {
    return (min <= (index + 1) && (index + 1) <= max)
  });
  return newArray;
}

console.log(
  `I nomi che hanno posizione compresa tra ${posizioneMin} e ${posizioneMax} di arrayNomi sono `
  + myFunction(arrayNomi, posizioneMin, posizioneMax)
);
