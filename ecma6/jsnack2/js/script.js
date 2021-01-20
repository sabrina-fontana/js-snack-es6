// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadre = [
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

const nuovoSquadre = [];

function randomNumber(min, max) {
  let result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
for (let x = 0; x < squadre.length; x++) {
  squadre[x].punti = randomNumber(0, 20);
  squadre[x].falliSubiti = randomNumber(0, 10);
  // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
  const {nome, falliSubiti} = squadre[x];
  // pusho un OGGETTO
  nuovoSquadre.push(
    {
      nome,
      falliSubiti
    }
  );
}

console.log(squadre);
console.log(nuovoSquadre);

var oggetto1 = [1, 2]
var oggetto2 = [3, 4]
var insieme =[...oggetto1, ...oggetto2]
console.log(insieme)
console.log(oggetto1 + oggetto2)
