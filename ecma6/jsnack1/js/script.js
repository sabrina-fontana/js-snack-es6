// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)
var arrayBici = [
  {
    nome: 'bici1',
    peso: 30
  },
  {
    nome: 'bici2',
    peso: 50
  },
  {
    nome: 'bici3',
    peso: 40
  },
  {
    nome: 'bici4',
    peso: 70
  }
];

let biciLeggera = arrayBici[0];

for (let x = 0; x < arrayBici.length; x++) {
  if (arrayBici[x].peso < biciLeggera.peso) {
    biciLeggera = arrayBici[x];
  }
}

let {nome, peso} = biciLeggera;
console.log(`La bici con peso minore è ${nome}, e il suo peso è ${peso}kg`);
