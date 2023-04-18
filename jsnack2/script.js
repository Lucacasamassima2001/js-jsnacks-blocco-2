// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.


namearr = [
    "luca",
    "franco",
    "michele",
    "cosimo",
    "lorenzo"
]
console.log(namearr)

surnamearr = [
    "bianchi",
    "rossi",
    "verdi",
    "gialli",
    "esposito"
]
console.log(surnamearr)

const combos = 10


for(i = 0; i <= combos; i++) {
    let randomname = namearr[Math.floor(Math.random() * namearr.length)];
    // console.log(randomname)
    let randomsurname = surnamearr[Math.floor(Math.random() * surnamearr.length)];
    // console.log(randomsurname)
    console.log(randomname + " " + randomsurname)
}