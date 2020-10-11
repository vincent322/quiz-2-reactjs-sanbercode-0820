const Balok = (...args) => {
    let sum = 1;
    for (let arg of args) sum = sum * arg;
    return sum;
}

const Kubus = (...args) => {
    let sum = 1;
    for (let arg of args) sum = sum * arg;
    return sum;
}

console.log( "Balok = "+Balok(3, 4, 5) );
console.log( "Kubus = "+Kubus(4, 4, 4) );