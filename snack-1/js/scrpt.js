const etaA= parseInt(prompt(`Quanti anni hai?`));
const etaB= parseInt(prompt(`Quanti anni hai?`));


if (etaA > etaB) {
    console.log(`più piccolo`);
}
else if (etaB > etaA ){
    console.log(`più grande`);
}
else{
    console.log(`l'età è la stessa`)
}