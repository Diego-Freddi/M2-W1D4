/* 
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

        i principali tipi di dati (datatype) si distinguono in:
        Primitivi: Number, String, Boolean, undefined e null, BigInt, Symbol
        Strutturali: Oggetti, array

        Number: rappresenta qalsiasi numero
        String: rappresenta qualsiasi tipo di carattere, sequenza di caratteri o spazio vuoto, inseriti  in apici
        Boolean: valori che ci consentono di fare confronti a cui dare risposta Vero o Falso
        undefined e null
            undefined: alla variabile non è stato ancora assegnato alcun valore
            null: rappresenta il “vuoto” specificato in variabile
        BigInt: serve per operare con numeri di enormi dimensioni, che non riuscirebbero ad essere gestiti dal type Number
        Symbol: in realtà è utilizzato raramente. Serve per identificare in maniera univoca determinati elementi


        Oggetti: sono raccolte di dati formati da coppie chiave:valore, separate tra loro da “virgola”. Vengono inseriti nella variabile racchiusi tra parentesi graffe { }

        Array: sono un'altra raccolta di dati, sostanzialmente comodi da usare quando non si necessita di una chiave. Vengono inseriti nella variabile racchiusi tra parentesi quadre [ ]
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

        Un oggetto può essere definito come una raccolta di valori identificati da una chiave.
        Ad esempio, i miei dati anagrafici sono:

        Nome: Diego
        Cognome: Freddi
        Indirizzo: via Matteotti
        
        Nome, Cognome e Indirizzo sono le chiavi, mentre Diego, Freddi e via Matteotti sono i corrispondenti valori.
        L'intera lista è l'oggetto.
        Si evince che ogni oggetto è una raccolta di coppie chiave:valore. Le coppie saranno scritte nel codice separate da ":". Ogni coppia sarà separata dalla virgola e
        verranno inserite nella variabile racchiuse tra parentesi graffe.
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20
console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Diego Freddi'
console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x
console.log(sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = 'john'
let name2 = 'John'

console.log(name1 === name2)
console.log(name1.toLowerCase === name2.toLowerCase)
