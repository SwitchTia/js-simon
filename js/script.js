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
const randomNrElem = document.getElementById("generate");
const generateBtnElem = document.querySelector("#generateBtn");

const inputForm = document.querySelector(".input-form");
const inputNrList = document.querySelectorAll(".input-form input[type=number]");


//generate 5 ramndom numbers:
const randomNrArray = [];

for (let i = 0; i < 5; i++) {

  randomNr = Math.floor(Math.random() * 10) ;

  while (randomNrArray.includes(randomNr)) {
    randomNr = Math.floor(Math.random() * 10) ;
  }
  randomNrArray.push(randomNr);
}
console.log(randomNrArray);

//visualize the numbers for the user
generateBtnElem.addEventListener("click", function(event){
  event.preventDefault();

  randomNrElem.innerHTML = randomNrArray.join("   ");
  //set a timer
  setTimeout(function () {
    randomNrElem.innerHTML = "";
  }, 3000);

})

//on submit event of the click, storing the numbers into an array:
const inputArray = [];

inputForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Clearing array before adding new values:
    inputArray.length = 0;

  for (let i = 0; i < inputNrList.length; i++) {
    let curNr = parseInt(inputNrList[i].value);
    if (!isNaN(curNr)) {
        inputArray.push(curNr);
      }
  }
  console.log(inputArray);
});

//cheching for identical numbers between randomNRArray and inputArray:
let count = 0;
let resultNr = [];

for(let i = 0; i < inputArray.length; i++){
  for(let j = 0; j < randomNrArray.length; j++){
    if(inputArray[i].includes(randomNrArray[j])){
      count ++;
      resultNr.push(inputArray[i]);
    }
  }
}
console.log(count);
console.log(resultNr);





// const generateBtn = document.querySelector("#generate");
// const randomResult = document.querySelector("#verifica");

// //document.querySelectorAll()
// const randomNumeri = document.querySelector("h1")
// console.log(randomNumeri);
// const verificaBtn = document.querySelector("#verifica")
// const risultatoOutput = document.querySelector("h2")
// console.log(generaBtn)

//   console.log(arrayRandom)
//   randomNumeri.innerHTML = arrayRandom.join(" ")
//   //disable the button
//   generaBtn.disabled = true;

//   const timeoutId = setTimeout(function () {
//     randomNumeri.innerHTML = "";
//   }, 3000);
//   //clearTimeout(timeoutId);
// })
