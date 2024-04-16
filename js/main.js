let datoUno = prompt ("Scrivi il tuo nome");
let surname = prompt ("Scrivi il tuo cognome");
let favColor = prompt ("Scrivi il tuo colore preferito");

let newPassword = datoUno + surname + favColor;

document.getElementById("titolo").innerHTML = newPassword;
