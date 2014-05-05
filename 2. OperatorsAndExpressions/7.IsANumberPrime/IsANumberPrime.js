function isANumberPrime() {
    var number = jsConsole.readInteger("#input");
        prime = true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0 && number !== i) {
            prime = false;
            break;
        }
    }
    jsConsole.writeLine(number + " is prime -> " + prime);
    
}