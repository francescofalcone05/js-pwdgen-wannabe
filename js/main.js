const datoUno = prompt ("Scrivi il tuo nome");
const surname = prompt ("Scrivi il tuo cognome");
const favColor = prompt ("Scrivi il tuo colore preferito");

let newPassword = datoUno + surname + favColor + "#5";

document.getElementById("mypssw").innerHTML = newPassword;

alert("Password generata:\n" + newPassword )