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
