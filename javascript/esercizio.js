/*  JAVASCRIPT */

// metodo "alert" per mostrare un messagio iniziale 
alert("Ciao Benvenut@ a Javascript creeremo la tua password");

// dichiarazione delle variabili  

let nome;
let cognome;
let colore;
let numRandom;

// asegnazione di un valore alle variabili con il operatore di asegnazione "="
// con il "prompt" si assegna il valore del utente

nome = prompt("Ciao inserisci il tuo nome"); //string
cognome = prompt("Adeso inserisci il tuo cognome"); //string
colore = prompt("Ora inserisci il tuo colore preferito"); //string

// dichiarazione dei numeri per il range del numero aliatorio
let numMin = 101; // number
let numMax = 221; // number

/* per il numero aleatorio si usa:
Il metodo "Math.random()" crea un numero decimale tra 0 e 1 ma non sarà mai ne 0 ne 1,
Il metodo "Math.floor()" elimina decimale,
I numeri numMin e numMax da il range nel quale sarà creato el numero aleatorio.
*/
numRandom = Math.floor(Math.random()*(numMax - numMin + 1) + numMin);

//varibile con la concatenazione dei dati del del utente e il numero aleatorio
let password = "nome+cognome+colore+numRandom" //string

alert("Questa è al tua password fatta con Javascript " + password)