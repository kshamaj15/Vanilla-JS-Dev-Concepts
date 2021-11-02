    let count = 1;
    function onlyOnce(callback){
    if(count) {
        count = 0;
        return callback;
    }
    return;
}

function printMyanme() {
    console.log('Kshama Jain');
}

onlyOnce(printMyanme)();
onlyOnce(printMyanme)();
onlyOnce(printMyanme)();
onlyOnce(printMyanme)();
onlyOnce(printMyanme)();
