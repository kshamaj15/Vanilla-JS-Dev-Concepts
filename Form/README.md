# JS COncepts
## Promises
## Storage APIs
## this keyword
## array methods and their pollyfills
## pollyfills
## Higher order function
## Clouser
-----------
-----------
# Higher Order function
A higher order function is a function that takes a function as an argument, or returns a function

if we have an array or radius, are we want to calculate area, perimeter and diameter
generally we write

```
const radius = [1, 2, 3, 4];

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
```
but here we are repeating ourselve
we can write this in optimize way
```
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
```

# Clouser
Clouser is a function bundled with its lexical environment
```
function x() {
    var c = 12;
    function y(){
        var b = 2;
        function z(){
            var a = 1;
            console.log(a, b, c);
        }
        b = 10;
        return z;
    }
    c = 19
    return y
}

var v = x();
v()()
```
### Application of clouser
- Module design pattern
- Currying
- function like once
- memoize
- maintaining state in async world
- setTimeouts
- Iterators

