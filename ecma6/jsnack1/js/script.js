// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)
const arrayBici = [
  {
    nome: 'bici1',
    peso: 30
  },
  {
    nome: 'bici2',
    peso: 16
  },
  {
    nome: 'bici3',
    peso: 22
  },
  {
    nome: 'bici4',
    peso: 18
  }
];

// ipotizzo che la bici più leggera sia la prima dell'array
let biciLeggera = arrayBici[0];

// ciclo nell'array per trovare una bici più leggera (se esiste)
for (let x = 0; x < arrayBici.length; x++) {
  if (arrayBici[x].peso < biciLeggera.peso) {
    biciLeggera = arrayBici[x];
  }
}

// destructuring
const {nome, peso} = biciLeggera;

// template literals
console.log(`La bici con peso minore è ${nome}, e il suo peso è ${peso}kg`);
