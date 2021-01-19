// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
let squadre = [
  {
    nome: 'Inter',
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Milan',
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Juventus',
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Roma',
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Atalanta',
    punti: 0,
    falliSubiti: 0
  }
];

let nuovoSquadre = [{}, {}, {}, {}, {}];

function randomNumber(min, max) {
  let result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

for (let x = 0; x < squadre.length; x++) {
  let punti = randomNumber(0, 20);
  let falli = randomNumber(0, 10);
  squadre[x].punti = punti;
  squadre[x].falliSubiti = falli;
  let {nome, falliSubiti} = squadre[x];
  nuovoSquadre[x].nome = nome;
  nuovoSquadre[x].falliSubiti = falliSubiti;
}
console.log(squadre);
console.log(nuovoSquadre);
