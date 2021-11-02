const radius = [1, 2, 3, 4];

// general 
const area = function(radius) {
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

const peri = function(radius) {
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(Math.PI * 2 * radius[i]);
    }
    return output;
}

const diameter = function(radius) {
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

// using hof
const calculate = function(calculateCB) {
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(calculateCB(radius[i]));
    }
    return output;
}

const area1 = calculate((r) => {
    return Math.PI * r*r;
})
const peri1 = calculate((r) => {
    return 2* Math.PI * r;
})
const dia1 = calculate((r) => {
    return 2*r;
})

console.log(area1);
console.log(peri1);
console.log(dia1);
