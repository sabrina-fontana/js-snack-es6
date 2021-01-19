// jsnack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore
var bici1 = {
  'nome': 'bici Blu',
  'pesoKg': 60
}

var bici2 = {
  'nome': 'bici Rossa',
  'pesoKg': 55
}

var bici3 = {
  'nome': 'bici Verde',
  'pesoKg': 50
}

arrayBici = [bici1, bici2, bici3];

for (var x = 0; x < arrayBici.length; x++) {
  var pesoMinore = (Math.min(arrayBici[x].pesoKg));
  if (arrayBici[x].pesoKg === pesoMinore) {
    var biciLeggera = arrayBici[x];
  }
}

console.log(biciLeggera);
