const arr = [1,2,3,4,5];

const double = arr.map((item, index) => {
    return 2*item;
})

Array.prototype.myMap =  function(callback){
    const newArr = [];
    for(let i=0; i<this.length; i++){
        newArr.push(callback(this[i], i));
    }
    return newArr;
} 

const double1 = arr.myMap((item, index) => {
    return 2*item;
})

console.log(double);
console.log(double1);
