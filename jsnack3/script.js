// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


const myarr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]

let odds = [];



for(let i = 0; i <= myarr.length; i++){
    if (myarr[i] % 2 === 1) {
        
        odds.push(myarr[i])
        console.log(odds) 
    }
}
        const sum = odds.reduce((total, amount) => total + amount);
        console.log(sum)
