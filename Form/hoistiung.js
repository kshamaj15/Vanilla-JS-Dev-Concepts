var a = 3;
var b = 6;

function x(){
    var a = 30;
    function y(){
        console.log(a, b);
    } 
    y();
}

x();
