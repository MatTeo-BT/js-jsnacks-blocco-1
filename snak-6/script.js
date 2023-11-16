const guestList = [`Marco`, `Mattia`, `Luca`, `Francesco`, `Jacopo`];
const insertName = prompt(`Type your name`);
let answer = false;

 for (let i = 0; i < guestList.length; i++){
    const name = guestList[i];
    if(name == insertName){
        answer = true;
    }
 }
 console.log(answer)