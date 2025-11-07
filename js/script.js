// console.log("hello");

// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// BONUS:
// Inseriamo la validazione: se l'utente inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

// Consigli del giorno:

// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"


// Milestone 0
// Creare l'interfaccia ( anche senza css)

// Milestone 1
// Generare i 5 numeri random
// Stampare i 5 numeri in pagina
// Far scomparire i 5 numeri dopo 30 secondi e mostrare gli input

// Milestone 2
// Al click sul bottone leggere i numeri inseriti dall'utente
// Controllare quanti dei umeri sono stati indovinati
// Stampare il risultato del punteggio
const form = document.querySelector("form");
const randomNrElem = document.querySelector(".random-numbers")
const randomNrArray = [];

for (let i = 0; i < 5; i++) {

  randomNr = Math.floor(Math.random() * 10) + 1;
  randomNrArray.push(randomNr);
}
//console.log(randomNrArray);
randomNrElem.innerHTML = randomNrArray.join("   ")

const timeoutId = setTimeout(function () {
  randomNrElem.innerHTML = "";
}, 3000);
//clearTimeout(timeoutId);

const nr1Elem = document.getElementById("nr1");
console.log(nr1Elem);
const nr2Elem = document.getElementById("nr2");
const nr3Elem = document.getElementById("nr3");
const nr4Elem = document.getElementById("nr4");
const nr5Elem = document.getElementById("nr5");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nr1 = nr1Elem.value;
console.log(nr1);
  //create an array to push into all 5 user's inputs
  //const inputNrArray = [];


  //inputNrArray +=
//includes method 
});