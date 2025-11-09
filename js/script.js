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

// Select elements
const randomNrElem = document.getElementById("generate");
const generateBtnElem = document.querySelector("#generateBtn");
const inputForm = document.querySelector(".input-form");
const inputNrList = document.querySelectorAll(".number-input");
const resultMessageElem = document.querySelector(".result-message");

let randomNrArray = []; // store generated numbers

// Generate 5 random numbers (1–10, no duplicates)
function generateRandomNumbers() {
  randomNrArray = [];

  while (randomNrArray.length < 5) {
    let randomNr = Math.floor(Math.random() * 10); // 1–9
    if (!randomNrArray.includes(randomNr)) {
      randomNrArray.push(randomNr);
    }
  }
  console.log(`Generated numbers:${randomNrArray}`);
}

// Show numbers for 3 seconds
generateBtnElem.addEventListener("click", function (event) {
  event.preventDefault();

  generateRandomNumbers(); // create new numbers
  randomNrElem.textContent = randomNrArray.join("   ");

  setTimeout(() => {
    randomNrElem.textContent = "";
  }, 3000);
});

// Handle form submission
inputForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Read user inputs
  const inputArray = [];
  for (let i = 0; i < inputNrList.length; i++) {
    const value = parseInt(inputNrList[i].value);
    if (!isNaN(value) && value >= 1 && value < 10) {
      inputArray.push(value);
    }
  }
  console.log(`User input:${inputArray}`);

  // Compare arrays to find correct guesses
  const resultNr = inputArray.filter(num => randomNrArray.includes(num));
  const count = resultNr.length;

  // Create the result message
  let resultMessage = "";
  if (count === 0) {
    resultMessage = "No correct numbers. Try again!";
  } else {
    resultMessage = `Correct numbers (${count}): ${resultNr.join(", ")}`;
  }

  // Show result on the page
  resultMessageElem.textContent = resultMessage;

  // Reset input fields
  inputForm.reset();
});


//cheching for identical numbers between randomNRArray and inputArray:
// let count = 0;
// let resultNr = [];

// for (let i = 0; i < inputArray.length; i++) {
//   for (let j = 0; j < randomNrArray.length; j++) {
//     if (inputArray.includes(randomNrArray[j])) {
//       count++;
//       resultNr.push(inputArray[i]);
//     }
//   }
// }
// console.log();
// console.log(resultNr);


