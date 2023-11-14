const lista = document.querySelector (".lista")
for (let i=0; i<6;i++) {
    const element = `<li class="text-green">ciao</li>`;
    lista.innerHTML += element;
}