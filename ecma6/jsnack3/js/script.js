// *****variabili*****
var arrayNomi = ['qui', 'quo', 'qua', 'pippo', 'pluto', 'paperino'];
console.log('arrayNomi è composto da: ' + arrayNomi);
var posizioneMin;
var posizioneMax;

// *****funzioni*****
function minNotValid() {
  return isNaN(posizioneMin) || posizioneMin <= 0 || posizioneMin > arrayNomi.length;
}

function maxNotValid() {
  return isNaN(posizioneMax) || posizioneMax > arrayNomi.length || posizioneMax <= posizioneMin;
}

// *****ECMA5*****
// function arrayFilter(array, min, max) { //dove min e max rappresentano la posizione umana nell'array (+1 rispetto all'index)
//   var newArray = [];
//   for (var x = 0; x < array.length; x++) {
//     if ((x + 1) >= min && (x + 1) <= max) {
//       newArray.push(array[x]);
//     }
//   }
//   return newArray;
// };

posizioneMin = parseInt(prompt('Inserisci il numero minimo'));
// controllo posizioneMin
while (minNotValid()) {
  alert('Inserisci un numero minimo valido');
  posizioneMin = parseInt(prompt('Inserisci il numero minimo'));
}

posizioneMax = parseInt(prompt('Inserisci il numero massimo (non superiore a 6)'));
// controllo posizioneMax
while (maxNotValid()) {
  alert('Inserisci un numero massimo valido');
  posizioneMax = parseInt(prompt('Inserisci il numero massimo (non superiore a 6)'));
};

// console.log('I nomi con posizione compresa tra ' + posizioneMin + ' e ' + posizioneMax + ' sono: ' + arrayFilter(arrayNomi, posizioneMin, posizioneMax));

// ECMA6
function arrayFilter(array, min, max) {
  let newArray = array.filter((element, index, array) => {
    return (min <= (index + 1) && (index + 1) <= max)
  });
  return newArray;
}

console.log(
  `I nomi con posizione compresa tra ${posizioneMin} e ${posizioneMax} sono `
  + arrayFilter(arrayNomi, posizioneMin, posizioneMax)
);
