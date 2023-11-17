// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.
const array = [];
for (let i = 0; i < 6; i++){
    const number = prompt (`Type a number`)
    if (number % 2 !== 0){
        array.push(number);
    }
}
console.log(array)
